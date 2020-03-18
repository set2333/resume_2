import { useState } from 'react';
import ButtonOk from '../OtherComponents/ButtonOk';
import useModal from '../OtherComponents/useModal';
import Message from '../OtherComponents/Message';
import sendAjax from '../../Function/sendAjax';

const FormMessage = () => {
  const [textMessage, setTextMassage] = useState('');
  const [autorName, setAutorName] = useState('');
  const [autorMail, setAutorMail] = useState('');
  const [Modal, open] = useModal(Message);
  const sendMessage = (message, autor, adress) => {
    const query = sendAjax('/sendMessage', { message, autor, adress });
    query.subscribe((response) => {
      if (response.status === 200) open({ head: 'Отправленно', text: 'Ваше сообщение успешно отправленно', ulData: [] });
      else {
        open({
          head: 'Ошибка',
          text:
            'Произошла ошибка. Пожалуйста отправте Ваше сообщение на почту. Спасибо за понимание.',
          ulData: [],
        });
      }
    });
  };

  return (
    <>
      <Modal />
      <form className="formMessage">
        <h2>Сообщение</h2>
        <textarea
          className="text"
          name="message"
          value={textMessage}
          onChange={({ target: { value } }) => setTextMassage(value)}
        />
        <h3>
          Представьтесь пожалуйста
          <input
            name="name"
            type="text"
            value={autorName}
            onChange={({ target: { value } }) => setAutorName(value)}
          />
        </h3>
        <h3>
          Ваш адрес
          {' '}
          <input
            name="adress"
            type="adress"
            value={autorMail}
            onChange={({ target: { value } }) => setAutorMail(value)}
          />
        </h3>
        <ButtonOk onClick={() => sendMessage(textMessage, autorName, autorMail)} />
      </form>
      <style jsx>
        {`
          .formMessage {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            background: #65e841;
            border: 1px solid black;
            border-radius: 5px;
            box-shadow: 3px 3px 5px black;
          }

          .text {
            width: 90%;
            height: 100px;
          }

          h3 {
            text-align: left;
            padding: 10px 30px;
          }

          input {
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
};

export default FormMessage;
