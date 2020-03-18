const { Email, User, Setting } = require('./mongooseInit');
const getHash = require('../../Function/getHash');
const { getSettings, getEmail } = require('./getSettings');

const setUser = async (userData) => new Promise((resolve, reject) => {
  console.log('LOGIN: ', userData.login, ' PASS: ', userData.pass);
  if (userData.login !== undefined && userData.pass !== undefined) {
    const newUser = {};
    newUser.login = userData.login;
    newUser.pass = getHash(userData.pass);
    User.collection.drop();
    const user = new User(newUser);
    user.save((err) => {
      if (err) reject(err);
      resolve();
    });
  }
});

const setEmail = async (emailData) => {
  const currentEmail = await getEmail();
  return new Promise((resolve, reject) => {
    const newEmail = {};
    newEmail.host = emailData.host !== undefined ? emailData.host : currentEmail.host;
    newEmail.port = emailData.port !== undefined ? emailData.port : currentEmail.port;
    newEmail.secure = emailData.secure !== undefined ? emailData.secure : currentEmail.secure;
    newEmail.user = emailData.user !== undefined ? emailData.user : currentEmail.user;
    newEmail.pass = emailData.pass !== undefined ? emailData.pass : currentEmail.pass;
    newEmail.mail = emailData.mail !== undefined ? emailData.mail : currentEmail.mail;
    newEmail.sendmail = emailData.sendmail !== undefined ? emailData.sendmail : currentEmail.sendmail;
    Email.collection.drop();
    const email = new Email(newEmail);
    email.save((err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

const setSettings = async (settingsData) => {
  const currentSettings = await getSettings();
  return new Promise((resolve, reject) => {
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
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = { setUser, setEmail, setSettings };
