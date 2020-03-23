const mongoose = require('mongoose');
const { setUser, setEmail, setSettings } = require('./ServerModules/Mongoose/setSettingsUser');

const email = {
  host: 'smtp.yandex.com',
  port: 465,
  secure: true,
  user: 'example@yandex.ru',
  pass: 'passFromTest',
  mail: 'example@mail.ru',
  sendmail: false,
};

const user = {
  login: 'admin',
  pass: '123456789',
};

const settings = {
  sendAdmLogin: false,
  countMessagesOnePage: 10,
};

mongoose.connect(
  'mongodb://localhost:27017/resumedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err) => {
    if (err) return console.log(err);
    await setUser(user);
    await setEmail(email);
    await setSettings(settings);
    console.log('Настройки для тестирования установленны');
    mongoose.disconnect();
  },
);
