const { Email, User, Setting } = require('./mongooseInit');

const getUser = async (user = null) => new Promise((resolve, reject) => {
  User.findOne(user || {}, (err, dataUser) => {
    if (err) reject(err);
    const data = {};
    data.login = dataUser.login;
    if (user) data.id = dataUser._id;
    resolve(data);
  });
});

const getEmail = async (getPass = false) => new Promise((resolve, reject) => {
  Email.findOne({}, (err, dataEmail) => {
    if (err) reject(err);
    const data = {};
    data.email = dataEmail.mail;
    data.emaillogin = dataEmail.user;
    data.emailhost = dataEmail.host;
    data.emailport = dataEmail.port;
    data.emailsecure = dataEmail.secure;
    data.sendmail = dataEmail.sendmail;
    if (getPass) data.emlailpass = dataEmail.pass;
    resolve(data);
  });
});

const getSettings = async () => new Promise((resolve, reject) => {
  Setting.findOne({}, (err, dataSettings) => {
    if (err) reject(err);
    const data = {};
    data.sendAdmLogin = dataSettings.sendAdmLogin;
    data.countMessagesOnePage = dataSettings.countMessagesOnePage;
    resolve(data);
  });
});

const getAllSettings = async () => Promise.all([getUser(), getEmail(), getSettings()]);

module.exports = {
  getUser,
  getEmail,
  getSettings,
  getAllSettings,
};
