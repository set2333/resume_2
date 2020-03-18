// Модуль отправки сообщений на email
const nodemailer = require('nodemailer');
const { getEmail } = require('../Mongoose/getSettings');
const errLogger = require('../Logger/errorLogger');

const sendEmail = async (mailMessage, settings, sendAdmin = false) => {
  try {
    let emailSettings;
    if (settings === null) emailSettings = await getEmail(true);
    else emailSettings = settings;
    const transporter = nodemailer.createTransport({
      host: emailSettings.emailhost,
      port: emailSettings.emailport,
      secure: emailSettings.emailsecure,
      auth: {
        user: emailSettings.emaillogin,
        pass: emailSettings.emlailpass,
      },
    });
    if (sendAdmin) {
      // Сообщение о входе в админку
      transporter.sendMail({
        from: emailSettings.emaillogin,
        to: emailSettings.email,
        subject: 'Вход в админку.',
        html: `<h1>${mailMessage.message}</h1>`,
      });
    } else {
      // Сообщение о новом сообщении
      transporter.sendMail({
        from: emailSettings.emaillogin,
        to: emailSettings.email,
        subject: 'Сообщение с сайта резюме',
        html: `<h1>На Ваше резюме новый отклик</h1><h2>Пользователь: ${mailMessage.autor}</h2><h2>Обратный адрес: ${mailMessage.adress}</h2><p>${mailMessage.message}</p>`,
      });
    }
  } catch (err) {
    errLogger('Ошибка отправки сообщения на e-mail', err);
  }
};

module.exports = sendEmail;
