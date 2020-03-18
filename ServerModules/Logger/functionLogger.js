// Модуль логирования
const fs = require('fs');
const newLine = require('os').EOL;

const writeLog = (logStr, dirLogs) => {
  const date = new Date();
  const strDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  fs.appendFile(`${__dirname}/../../logs/${dirLogs}/${strDate}.txt`, logStr + newLine, (err) => {
    if (err) console.log(err);
  });
};

module.exports = { writeLog };
