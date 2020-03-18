// Модуль логирования
const { writeLog } = require('./functionLogger');

const allLogger = (req, res, next) => {
  const logString = `${req.method} ${req.url} ${req.hostname} ${
    req.connection.remoteAddress
  } ${new Date()}`;
  setImmediate(writeLog.bind(this, logString, 'all'));
  next();
};

module.exports = allLogger;
