// Модуль логирования
const { writeLog } = require('./functionLogger');

const userLogger = (req, res, next) => {
  const logString = `${req.method} ${req.url} ${req.hostname} ${
    req.connection.remoteAddress
  } ${new Date()}`;
  setImmediate(writeLog.bind(this, logString, 'user'));
  next();
};

module.exports = userLogger;
