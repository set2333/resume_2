// Модуль сохранения настроек.
// Все функции модуля возвращают Promises. В дальнейшем должны использовать либо then, либо await.
const { Email, User, Setting } = require('./mongooseInit');
const getHash = require('../../Function/getHash');
const { getSettings, getEmail } = require('./getSettings');

// Сохранение пароля и логина администратора. В параметре объект со свойствами:
// login(string) - логин администратора.
// pass(string) - пароль администратора.
// Если параметр не задан или не объект, или не содержит нужный свойств, или значения свойств пустые
// или длинна логина меньше 5 или длинна пароля меньше 6 - вернем null.
// Если настройки обновились - вернем true.
const setUser = async (userData = {}) => new Promise((resolve) => {
  if (
    typeof userData !== 'object'
      || !userData.hasOwnProperty('login')
      || !userData.hasOwnProperty('pass')
      || userData.login === undefined
      || userData.pass === undefined
      || userData.login.length < 5
      || userData.pass.length < 6
  ) resolve(null);
  else {
    const newUser = {};
    newUser.login = userData.login;
    newUser.pass = getHash(userData.pass);
    User.collection.drop();
    const user = new User(newUser);
    user.save((err) => {
      if (err) resolve(null);
      resolve(true);
    });
  }
});

// Сохранение настроек отправки на e-mail. В параметре объект со свойствами:
// host(string) - сервер почны.
// port(number) - порт почты.
// secure(boolean) - настройка безопасности.
// user(string) - логин пользователя почны.
// pass(string) - пароль пользователя почты.
// mail(string) - адрес, куда отправлять сообщения.
// sendmail(boolean) - флаг, стоит ли отправлять сообщение на e-mail,
//                          при получении сообщения от пользователя
// Если параметр не задан или не корректен - возвращаем null, иначе возвращаем true.
// Если в параметре нет каких-либо полей, оставляем значения которые были до этого.
const setEmail = async (emailData = null) => {
  if (emailData === null || typeof emailData !== 'object') {
    return new Promise((resolve) => resolve(null));
  }
  const currentEm = await getEmail(true); // Получение текущих настроек.
  return new Promise((resolve) => {
    const newEmail = {};
    newEmail.host = emailData.host !== undefined ? emailData.host : currentEm.emailhost;
    newEmail.port = emailData.port !== undefined ? emailData.port : currentEm.emailport;
    newEmail.secure = emailData.secure !== undefined ? emailData.secure : currentEm.emailsecure;
    newEmail.user = emailData.user !== undefined ? emailData.user : currentEm.emaillogin;
    newEmail.pass = emailData.pass !== undefined ? emailData.pass : currentEm.emlailpass;
    newEmail.mail = emailData.mail !== undefined ? emailData.mail : currentEm.email;
    newEmail.sendmail = emailData.sendmail !== undefined ? emailData.sendmail : currentEm.sendmail;
    Email.collection.drop();
    const email = new Email(newEmail);
    email.save((err) => {
      if (err) resolve(null);
      else resolve(true);
    });
  });
};

// Сохранение настроек. В параметре объект со свойствами:
// sendAdmLogin(boolean) - сообщать о входе в админскую часть не e-mail.
// countMessagesOnePage(number) - количество сообщений на странице в админке.
// Едм параметр не задан или не объект вернем null, иначе вернем true.
const setSettings = async (settingsData = null) => {
  if (settingsData === null || typeof settingsData !== 'object') {
    return new Promise((resolve) => resolve(null));
  }
  const currentSettings = await getSettings();
  return new Promise((resolve) => {
    const newSettings = {};
    newSettings.sendAdmLogin = settingsData.sendAdmLogin !== undefined
      ? settingsData.sendAdmLogin
      : currentSettings.sendAdmLogin;
    newSettings.countMessagesOnePage = settingsData.countMessagesOnePage !== undefined
      ? settingsData.countMessagesOnePage
      : currentSettings.countMessagesOnePage;
    Setting.collection.drop();
    const settings = new Setting(newSettings);
    settings.save((err) => {
      if (err) resolve(null);
      else resolve(true);
    });
  });
};

module.exports = { setUser, setEmail, setSettings };
