import { useState } from 'react';
import ButtonOk from '../OtherComponents/ButtonOk';

const FormMessage = () => {
  const [textMessage, setTextMassage] = useState('');
  const [autorName, setAutorName] = useState('');
  const [autorMail, setAutorMail] = useState('');
  return (
    <>
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
        <ButtonOk
          onClick={() => {
            alert('click');
          }}
        />
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
