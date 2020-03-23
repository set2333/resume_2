// Модуль получения настроек отправки сообщения на e-mail
// и данных для авторизации пользователя из базы.
// Все функции модуля возвращают Promises. В дальнейшем должны использовать либо then, либо await.
const { Email, User, Setting } = require('./mongooseInit');

// Получим данные об администраторе. Если в параметре указан объект, поиск происходит с фильтром по
// этому объекту. В этом случае результат будет null, если пользователь не найден или объект со
// свойствами login и id. Если функция вызывается без параметра, то в результате будет объект со
// свойством login. Свойство id в этом случае не используется.
const getUser = async (user = null) => new Promise((resolve, reject) => {
  User.findOne(user || {}, (err, dataUser) => {
    if (err) reject(err);
    const data = {};
    if (dataUser !== null) {
      data.login = dataUser.login;
      if (user) data.id = dataUser._id.toString();
      resolve(data);
    }
    resolve(null);
  });
});

// Получение настроек отправки сообщений на e-mail. Если задан параметр и его значение true, тогда
// в результирующий объект попадает значение пароля для почтового ящика, с которого происходит
// отправка сообщений. Если без параметра или значение параметра false, тогда в результирующем
// объекте свойства с паролем не будет.
// Теперь о свойствах результирующего объекта.
// emai(string) - адрес, куда будут отправлятся сообщения
// emaillogin(string) - логин почты, с которой происходит отправка сообщений
// emailhost(string) - адрес сервера, с которой происходит отправка сообщений
// emailport(number) - порт почты, с которой происходит отправка сообщений
// emailsecure(boolean) - настройки безопасности
// sendmail(boolean) - признак того, нужно ли вообще отправлять сообщение на e-mail, при получении
//                  сообщения от пользователя.
// emlailpass(string) - пароль почты, с которой происходит отправка сообщений
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
    data.emlailpass = getPass ? dataEmail.pass : undefined;
    resolve(data);
  });
});

// Получение дополнительных настроек. Возвращает объект со свойствами:
// sendAdmLogin(boolean) - сообщать на e-mail о входе администратора
// countMessagesOnePage(number) - количество сообщений в админском разделе
const getSettings = async () => new Promise((resolve, reject) => {
  Setting.findOne({}, (err, dataSettings) => {
    if (err) reject(err);
    const data = {};
    data.sendAdmLogin = dataSettings.sendAdmLogin;
    data.countMessagesOnePage = dataSettings.countMessagesOnePage;
    resolve(data);
  });
});

// Получение всех настроек сразу. Возвращает массив с объектами, идентичными обънектам в первых трех
// функциях модуля.
const getAllSettings = async () => Promise.all([getUser(), getEmail(), getSettings()]);

module.exports = {
  getUser,
  getEmail,
  getSettings,
  getAllSettings,
};
