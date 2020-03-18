const express = require('express');
const next = require('next');
const getHash = require('../../Function/getHash');
const {
  sendMessage, getMessages, getOneMessage, deleteMessage,
} = require('../Mongoose/messages');
const { setUser, setEmail, setSettings } = require('../Mongoose/setSettingsUser');
const {
  getAllSettings, getUser, getSettings, getEmail,
} = require('../Mongoose/getSettings');
const sendEmail = require('../Email/sendEmail');
const userLogger = require('../Logger/userLogger');
const adminLogger = require('../Logger/adminLogger');
const allLogger = require('../Logger/allLogger');
const errLogger = require('../Logger/errorLogger');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const Router = express.Router();
const jsonParser = express.json();

// Проверяем, авторизован ли пользователь
function isAutorized(req, res, callBack) {
  if (req.session.key) callBack();
  else {
    errLogger('Не удачная попытка доступа к закрытой части', req.path);
    res.sendStatus(400);
  }
}

function goodBody(req, res, callBack) {
  if (!req.body) {
    errLogger('Не заполнены параметры запроса', req.path);
    res.sendStatus(400);
  } else callBack();
}

// Сохранение сообщения и отправка его на email
Router.post('/sendMessage', userLogger, jsonParser, goodBody, async (req, res) => {
  try {
    const message = { autor: req.body.autor, adress: req.body.adress, message: req.body.message };
    await sendMessage(message);
    const settings = await getEmail(true);
    if (settings.sendmail) {
      setImmediate(sendEmail.bind(null, message, settings));
    }
    return res.sendStatus(200);
  } catch (err) {
    errLogger('Ошибка при отправки сообщения на сервер', err);
    return res.sendStatus(400);
  }
});

// Получение списка сообщений
Router.post('/getmessages', adminLogger, jsonParser, goodBody, isAutorized, async (req, res) => {
  try {
    const messages = await getMessages(req.body.numberPage);
    return res.send(JSON.stringify(messages));
  } catch (err) {
    errLogger('Ошибка при получении списка сообщений', err);
    return res.sendStatus(400);
  }
});

Router.post('/getmessage', adminLogger, jsonParser, goodBody, isAutorized, async (req, res) => {
  try {
    const message = await getOneMessage(req.body.id);
    return res.send(message);
  } catch (err) {
    errLogger('Ошибка при получении сообщения с сервера', err);
    return res.sendStatus(400);
  }
});

// Удаление сообщения
Router.post('/deletemessage', adminLogger, jsonParser, goodBody, isAutorized, async (req, res) => {
  try {
    await deleteMessage(req.body.id);
    res.sendStatus(200);
  } catch (err) {
    errLogger('Ошибка при удалении сообщения', err);
    res.sendStatus(400);
  }
});

// Авторизация пользователя
Router.post('/login', adminLogger, jsonParser, goodBody, async (req, res) => {
  try {
    const user = await getUser({ login: req.body.login, pass: getHash(req.body.pass) });
    if (user === null) {
      errLogger('Не удачная попытка авторизации', { login: req.body.login, pass: req.body.pass });
      return res.sendStatus(400);
    }
    req.session.key = user.id;
    const settings = await getSettings();
    if (settings.sendAdmLogin) {
      setImmediate(
        sendEmail.bind(null, { message: 'Совершен вход в административный раздел.' }, null, true),
      );
    }
    return res.sendStatus(200);
  } catch (err) {
    errLogger('Ошибка при авторизации пользователя', err);
    return res.sendStatus(400);
  }
});

// Получение JSON объекта с настройками пользователя и отправки сообщений на email
Router.post('/getsettings', adminLogger, isAutorized, async (req, res) => {
  try {
    const settings = await getAllSettings();
    const result = { ...settings[0], ...settings[1], ...settings[2] };
    res.send(JSON.stringify(result));
  } catch (err) {
    errLogger('Ошибка при получении натроек', err);
    res.sendStatus(400);
  }
});

// Установка настроек пользователя и отправки сообщений на email
Router.post('/setsettings', adminLogger, jsonParser, goodBody, isAutorized, (req, res) => {
  try {
    setUser(req.body.admin);
    setEmail(req.body.email);
    setSettings(req.body.settings);
    return res.sendStatus(200);
  } catch (err) {
    errLogger('Ошибка при сохранении настроек', err);
    return res.sendStatus(400);
  }
});

Router.all('/admin/index', adminLogger, (req, res) => res.redirect('/admin'));
Router.all('/admin', adminLogger, isAutorized, (req, res) => handle(req, res));
Router.all('/admin/settings', adminLogger, isAutorized, (req, res) => handle(req, res));
Router.all('/admin/messages', adminLogger, isAutorized, (req, res) => handle(req, res));

Router.all('/', userLogger, (req, res) => handle(req, res));
Router.all('/index', userLogger, (req, res) => handle(req, res));
Router.all('/contacts', userLogger, (req, res) => handle(req, res));
Router.all('/work', userLogger, (req, res) => handle(req, res));
Router.all('/live', userLogger, (req, res) => handle(req, res));
Router.all('/login', userLogger, (req, res) => handle(req, res));

Router.all('*', allLogger, (req, res) => handle(req, res));

module.exports = Router;
