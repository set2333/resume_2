const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStorage = require('connect-mongo')(session);
const next = require('next');
const Router = require('./ServerModules/Routers/Router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  server.use(
    session({
      secret: 'ResumeSecretKey',
      saveUninitialized: false,
      resave: false,
      store: new MongoStorage({ url: 'mongodb://localhost:27017/resumedb' }),
    }),
  );
  server.use('/', Router);

  mongoose.connect(
    'mongodb://localhost:27017/resumedb',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) return console.log(err);
      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
    },
  );
});
