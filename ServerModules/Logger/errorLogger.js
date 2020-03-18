// Модуль логирования
const { writeLog } = require('./functionLogger');

const errLogger = (comments, err) => {
  setImmediate(writeLog.bind(this, comments + err.toString(), 'error'));
};

module.exports = errLogger;
