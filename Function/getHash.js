// Функция возвращает хэш
const crypto = require('crypto');

const getHash = (value) => {
  const hash = crypto.createHash('sha256');
  hash.update(value);
  return hash.digest('hex');
};

module.exports = getHash;
