const request = require('supertest');
const app = require('../server').server;

it('Check header message', (done) => {
  request(app)
    .get('/work')
    .expect(200)
    .end(done);
});

// it('GET /', (done) => {
//   console.log(request(app).get('/work'));
//   request(app)
//     .get('/')
//     .expect(200)
//     .end(done);
// });
// it('GET /', (done) => {
//   request(app)
//     .get('/')
//     .end((err, res) => {
//       if (err) return done(err);
//       console.log('RESULT.TEXT: ', res.text);
//       res.text.should.include('<title>Мой сайт</title>');
//     });
//   done();
// });
