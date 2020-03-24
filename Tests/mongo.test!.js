const mongoose = require('mongoose');
const assert = require('assert');
const getHash = require('../Function/getHash');

const {
  getUser,
  getEmail,
  getSettings,
  getAllSettings,
} = require('../ServerModules/Mongoose/getSettings');

const {
  getMessages,
  sendMessage,
  getOneMessage,
  deleteMessage,
  deleteAllMessages,
} = require('../ServerModules/Mongoose/messages');

const { setUser, setEmail, setSettings } = require('../ServerModules/Mongoose/setSettingsUser');

mongoose.connect(
  'mongodb://localhost:27017/resumedb',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  async (err) => {
    if (err) return console.log(err);
    await deleteAllMessages();
    setTimeout(() => mongoose.disconnect(), 1000);
  },
);

describe('TEST: module getSettings', () => {
  it('getUser без параметров', (done) => {
    getUser().then((result) => {
      assert.deepEqual(result, { login: 'admin' });
      done();
    });
  });
  it('getUser с правильным паролем', (done) => {
    getUser({
      login: 'admin',
      pass: getHash('123456789'),
    }).then((result) => {
      assert.deepEqual(result, { login: 'admin', id: result.id });
      done();
    });
  });
  it('getUser с не правильным паролем', (done) => {
    getUser({
      login: 'admin',
      pass: '7f904821ec7a44faa1d4862d7f7f86ed31ad677d8dc7d53ad74e2d99f106c924!',
    }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('getUser с некорректным объектом в параметре', (done) => {
    getUser({
      login_NO_CORRECT: 'admin',
      pass_NO_CORRECT: '7f904821ec7a44faa1d4862d7f7f86ed31ad677d8dc7d53ad74e2d99f106c924!',
    }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('getEmail без пароля', (done) => {
    getEmail().then((result) => {
      assert.deepEqual(result, {
        email: 'example@mail.ru',
        emaillogin: 'example@yandex.ru',
        emailhost: 'smtp.yandex.com',
        emailport: 465,
        emailsecure: true,
        sendmail: false,
        emlailpass: undefined,
      });
      done();
    });
  });
  it('getEmail с паролем', (done) => {
    getEmail(true).then((result) => {
      assert.deepEqual(result, {
        email: 'example@mail.ru',
        emaillogin: 'example@yandex.ru',
        emailhost: 'smtp.yandex.com',
        emailport: 465,
        emailsecure: true,
        sendmail: false,
        emlailpass: 'passFromTest',
      });
      done();
    });
  });
  it('getSettings', (done) => {
    getSettings().then((result) => {
      assert.deepEqual(result, {
        sendAdmLogin: false,
        countMessagesOnePage: 10,
      });
      done();
    });
  });
  it('getAllSettings', (done) => {
    getAllSettings().then((result) => {
      assert.deepEqual(result, [
        { login: 'admin' },
        {
          email: 'example@mail.ru',
          emaillogin: 'example@yandex.ru',
          emailhost: 'smtp.yandex.com',
          emailport: 465,
          emailsecure: true,
          sendmail: false,
          emlailpass: undefined,
        },
        {
          sendAdmLogin: false,
          countMessagesOnePage: 10,
        },
      ]);
      done();
    });
  });
});

describe('TEST: module messages', () => {
  it('getMessages без сообщений', (done) => {
    getMessages(0).then((result) => {
      assert.deepEqual(result, {
        count: 0,
        countMessagesOnePage: 10,
        messages: [],
      });
      done();
    });
  });
  it('sendMessage с правильным параметром', (done) => {
    sendMessage({
      autor: 'test_autor',
      adress: 'test_adress@mail.ru',
      message: 'Text test message',
    }).then((result) => {
      assert.deepEqual(result, true);
      done();
    });
  });
  it('sendMessage с не правильным параметром', (done) => {
    sendMessage({
      autor_NO_CORRECT: 'test_autor',
      adress: 'test_adress@mail.ru',
      message: 'Text test message',
    }).then((result) => {
      assert.deepEqual(result, null);
      done();
    });
  });
  it('sendMessage без параметра', (done) => {
    sendMessage().then((result) => {
      assert.deepEqual(result, null);
      done();
    });
  });
  it('getMessages с одним сообщением', (done) => {
    getMessages(0).then((result) => {
      assert.deepEqual(result, {
        count: 1,
        countMessagesOnePage: 10,
        messages: [
          {
            date: result.messages[0].date,
            autor: 'test_autor',
            adress: 'test_adress@mail.ru',
            id: result.messages[0].id,
            readed: false,
          },
        ],
      });
      done();
    });
  });
  it('getMessages без указания параметра', (done) => {
    getMessages().then((result) => {
      assert.deepEqual(result, {
        count: 1,
        countMessagesOnePage: 10,
        messages: [
          {
            date: result.messages[0].date,
            autor: 'test_autor',
            adress: 'test_adress@mail.ru',
            id: result.messages[0].id,
            readed: false,
          },
        ],
      });
      done();
    });
  });
  it('getMessages со страницей больше чем есть страниц сообщений', (done) => {
    getMessages(10).then((result) => {
      assert.deepEqual(result, {
        count: 1,
        countMessagesOnePage: 10,
        messages: [],
      });
      done();
    });
  });
  it('getMessages со второй страницы', (done) => {
    const promises = [];
    for (let i = 0; i < 11; i++) {
      promises.push(
        sendMessage({
          autor: 'test_autor',
          adress: 'test_adress@mail.ru',
          message: `Text test message ${i}`,
        }),
      );
    }
    Promise.all(promises).then(() => {
      getMessages(1).then((result) => {
        assert.equal(result.messages.length, 2);
        done();
      });
    });
  });
  it('getOneMessage', (done) => {
    getMessages(0).then((result) => {
      getOneMessage(result.messages[1].id).then((resultOneMessage) => {
        assert.deepEqual(resultOneMessage, {
          autor: 'test_autor',
          message: resultOneMessage.message,
          id: result.messages[1].id,
          date: result.messages[1].date,
          adress: 'test_adress@mail.ru',
        });
        done();
      });
    });
  });
  it('getOneMessage с не верныи id', (done) => {
    getOneMessage('BAD_ID').then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('getOneMessage без id', (done) => {
    getOneMessage().then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('deleteMessage', (done) => {
    getMessages(0).then((result) => {
      deleteMessage(result.messages[1].id).then((resultOneMessage) => {
        assert.equal(resultOneMessage, true);
        done();
      });
    });
  });
  it('deleteMessage с неверным id', (done) => {
    deleteMessage('BAD_ID').then((resultOneMessage) => {
      assert.equal(resultOneMessage, null);
      done();
    });
  });
  it('deleteMessage без id', (done) => {
    deleteMessage().then((resultOneMessage) => {
      assert.equal(resultOneMessage, null);
      done();
    });
  });
});

describe('TEST: module setSettings', () => {
  it('setUser без параметров', (done) => {
    setUser().then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с неверными параметрами', (done) => {
    setUser({ login_NO_CORRECT: 'admin', pass_NO_CORRECT: '123456789123456789' }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с параметром неверного типа', (done) => {
    setUser(false).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с незаполненым паролем', (done) => {
    setUser({ login: 'admin', pass: undefined }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с коротким логином', (done) => {
    setUser({ login: 'adm', pass: '123456789' }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с коротким паролем', (done) => {
    setUser({ login: 'admin', pass: '123' }).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setUser с верными параметрами', (done) => {
    setUser({ login: 'admin', pass: '123456' }).then((result) => {
      assert.equal(result, true);
      done();
    });
  });
  it('setUser проверка нового пароля', (done) => {
    getUser({
      login: 'admin',
      pass: getHash('123456'),
    }).then((result) => {
      assert.deepEqual(result, { login: 'admin', id: result.id });
      setUser({ login: 'admin', pass: '123456789' }).then(() => done());
    });
  });
  it('setEmail без параметров', (done) => {
    setEmail().then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setEmail с параметром неверного типа', (done) => {
    setEmail(false).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setEmail с одним параметром', (done) => {
    setEmail({ user: 'admin@mail.ru' }).then(() => {
      getEmail(true).then((result) => {
        assert.deepEqual(result, {
          email: 'example@mail.ru',
          emaillogin: 'admin@mail.ru',
          emailhost: 'smtp.yandex.com',
          emailport: 465,
          emailsecure: true,
          emlailpass: 'passFromTest',
          sendmail: false,
        });
        done();
      });
    });
  });
  it('setEmail проверка возврата', (done) => {
    setEmail({ user: 'example@yandex.ru' }).then((result) => {
      assert.equal(result, true);
      done();
    });
  });
  it('setSettings без параметров', (done) => {
    setSettings().then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setSettings с параметром неверного типа', (done) => {
    setSettings(false).then((result) => {
      assert.equal(result, null);
      done();
    });
  });
  it('setSettings с одним параметром', (done) => {
    setSettings({ countMessagesOnePage: 11 }).then(() => {
      getSettings().then((result) => {
        assert.deepEqual(result, {
          countMessagesOnePage: 11,
          sendAdmLogin: false,
        });
        done();
      });
    });
  });
  it('setSettings проверка возврата', (done) => {
    setSettings({ countMessagesOnePage: 10 }).then((result) => {
      assert.equal(result, true);
      done();
    });
  });
});
