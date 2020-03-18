const mongoose = require('mongoose');
const { getEmail } = require('./ServerModules/Mongoose/getSettings');

const gets = async () => {
  const result = await getEmail();
  console.log(result);
};

console.log('start');
mongoose.connect(
  'mongodb://localhost:27017/resumedb',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err);
    const settings = gets();
    return null;
  },
);

console.log('end');
