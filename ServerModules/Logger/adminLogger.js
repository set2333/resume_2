// Модуль логирования
const { writeLog } = require('./functionLogger');

const adminLogger = (req, res, next) => {
  const logString = `${req.method} ${req.url} ${req.hostname} ${
    req.connection.remoteAddress
  } ${new Date()}`;
  setImmediate(writeLog.bind(this, logString, 'admin'));
  next();
};

module.exports = adminLogger;
