// Модуль для работы с сообщениями от пользователей.
// Все функции модуля возвращают Promises. В дальнейшем должны использовать либо then, либо await.
const { Message } = require('../Mongoose/mongooseInit');
const { getSettings } = require('./getSettings');

// Получение списка сообщений. Передаем параметр с номером страницы. Количество элементов на
// странице определяется в настройках.(getSettings().countMessagesOnePage). Если параметр не
// передан, возвращаем первую страницу. Результат содержит объект со свойствами:
// count(number) - количество сообщений в результате.
// countMessagesOnePage(number) - количество сообщений на странице. Нужно для клиента
// messages(array) - массив со страницами. Содержит объекты со свойствами:
// date(date) - дата сообщения
// autor(string) - автор сообщения
// adress(string) - обратный адрес
// id(string) - ИД сообщения. Служет для последующего открытия или удаления сообщения
// readed(boolean) - флаг того, что сообщение прочитано. После создания - true,
//                  после первого открытия - false
const getMessages = async (numberPage = 0) => new Promise((resolve, reject) => {
  Message.find({})
    .sort('-date')
    .exec(async (err, docs) => {
      if (err) return reject(err);
      const { countMessagesOnePage } = await getSettings();
      const messagePageNumber = numberPage * countMessagesOnePage;
      const data = {
        count: docs.length,
        countMessagesOnePage,
        messages: [],
      };
      const endItem = messagePageNumber + countMessagesOnePage > docs.length
        ? docs.length - messagePageNumber
        : countMessagesOnePage;
      for (let i = 0; i < endItem; i += 1) {
        data.messages.push({
          date: docs[messagePageNumber + i].date,
          autor: docs[messagePageNumber + i].autor,
          adress: docs[messagePageNumber + i].adress,
          id: docs[messagePageNumber + i]._id,
          readed: docs[messagePageNumber + i].readed,
        });
      }
      return resolve(data);
    });
});

// Получение сообщения от пользователя. В параметре объект со свойствами:
// autor(string) - автор сообщения.
// adress(string) - обратный адрес.
// message(string) - текст сообщения.
// В БД записывается этот объект, дополненый свойствами:
// date(date) - дата сообщения.
// readed(boolean) - флаг прочитаности.
// Если параметр не задан или не содержит всех полей, возвращаем null и ни чего не записываем.
// Если сообщение записанно - возвращаем true.
const sendMessage = (message = {}) => new Promise((resolve) => {
  if (
    typeof message !== 'object'
      || !message.hasOwnProperty('autor')
      || !message.hasOwnProperty('adress')
      || !message.hasOwnProperty('message')
  ) {
    resolve(null);
  } else {
    const mailMessage = {
      date: new Date(),
      autor: message.autor,
      adress: message.adress,
      message: message.message,
      readed: false,
    };
    const messageNew = new Message(mailMessage);
    messageNew.save((err) => {
      if (err) resolve(null);
      else resolve(true);
    });
  }
});

// Удаление сообщения. В параметре id сообщения. Если некоректный параметр или id в БД не найден,
// возвращаем null. Если все удаленно нормально, возвращаем true.
const deleteMessage = (id = null) => new Promise((resolve) => {
  if (id === null) return resolve(null);
  Message.findByIdAndDelete(id, (err) => {
    if (err) resolve(null);
    else resolve(true);
  });
  return null;
});

// Удаление всех сообщений. Используется только в тестировании.
const deleteAllMessages = () => new Promise((resolve) => {
  Message.collection.drop();
  resolve();
});

// Получение одного сообщения по id. Если параметр неверный или не задан - вернем null.
// Если все хорошо и сообщение найденно, возвращается объект сос свойствами:
// autor(string) - автор сообщения.
// message(string) - текст сообщения.
// id(string) - ИД сообщения.
// date(date) - дата сообщения.
// adress(string) - обратный адрес.
// Дополнительно проверяется флаг readed. Если он равен false (т.е. сообщение ещё не читали), то он
// переводится в true.
const getOneMessage = (id = null) => new Promise((resolve) => {
  if (id === null) resolve(null);
  else {
    Message.findById(id, (err, doc) => {
      if (err) resolve(null);
      if (doc === undefined) resolve(null);
      else {
        const messages = {
          autor: doc.autor,
          message: doc.message,
          id: doc._id,
          date: doc.date,
          adress: doc.adress,
        };
        if (!doc.readed) {
          // Проверка на прочитаность
          Message.findByIdAndUpdate(id, { readed: true }, (errUpdate) => {
            if (errUpdate) resolve(null);
            else resolve(messages);
          });
        } else resolve(messages);
      }
    });
  }
});

module.exports = {
  getMessages,
  sendMessage,
  getOneMessage,
  deleteMessage,
  deleteAllMessages,
};
