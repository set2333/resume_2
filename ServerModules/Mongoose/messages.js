const { Message } = require('../Mongoose/mongooseInit');
const { getSettings } = require('./getSettings');

// Получение списка сообщений
const getMessages = async (numberPage) => new Promise(async (resolve, reject) => {
  const settings = await getSettings();
  const { countMessagesOnePage } = settings;
  const messagePageNumber = numberPage * countMessagesOnePage;

  Message.find({})
    .sort('-date')
    .exec((err, docs) => {
      if (err) return reject(err);
      const data = {
        count: docs.length,
        countMessagesOnePage,
        messages: [],
      };
      const endItem = messagePageNumber + countMessagesOnePage > docs.length
        ? docs.length - messagePageNumber
        : countMessagesOnePage;
      if ((messagePageNumber) => 0 && messagePageNumber + endItem < docs.length) {
        // Проверка. Мы не должны считывать элементы за пределпми массива docs
        for (let i = 0; i < endItem; i++) {
          data.messages.push({
            date: docs[messagePageNumber + i].date,
            autor: docs[messagePageNumber + i].autor,
            adress: docs[messagePageNumber + i].adress,
            id: docs[messagePageNumber + i]._id,
            readed: docs[messagePageNumber + i].readed,
          });
        }
      }
      resolve(JSON.stringify(data));
    });
});

const sendMessage = (message) => {
  const mailMessage = {
    date: new Date(),
    autor: message.autor,
    adress: message.adress,
    message: message.message,
    readed: false,
  };
  return new Promise((resolve, reject) => {
    const messageNew = new Message(mailMessage);
    messageNew.save((err) => {
      if (err) reject();
      // sendEmail(mailMessage);
      resolve();
    });
  });
};

const deleteMessage = (id) => new Promise((resolve, reject) => {
  Message.findByIdAndDelete(id, (err) => {
    if (err) reject();
    resolve();
  });
});

const getOneMessage = (id) => new Promise((resolve, reject) => {
  Message.findById(id, (err, doc) => {
    if (err) reject();
    const messages = {
      autor: doc.autor,
      message: doc.message,
      id: doc._id,
      date: doc.date,
      adress: doc.adress,
    };
    if (!doc.readed) {
      Message.findByIdAndUpdate(id, { readed: true }, (errUpdate) => {
        if (errUpdate) reject();
        resolve(messages);
      });
    } else resolve(messages);
  });
});

module.exports = {
  getMessages,
  sendMessage,
  getOneMessage,
  deleteMessage,
};
