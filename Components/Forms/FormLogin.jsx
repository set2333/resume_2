import { useState } from 'react';
import ButtonOk from '../OtherComponents/ButtonOk';
import useModal from '../OtherComponents/useModal';
import Message from '../OtherComponents/Message';
import sendAjax from '../../Function/sendAjax';

const FormLogin = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [Modal, open] = useModal(Message);

  const sendLogin = () => {
    const query = sendAjax('/login', { login: userName, pass: userPassword });
    query.subscribe(
      (response) => {
        if (response.status === 200) location.href = '/admin';
        else open({ head: 'Ошибка авторизации', text: 'Неверный логин или пароль', ulData: [] });
      },
      () => {
        open({ head: 'Ошибка авторизации', text: 'Неверный логин или пароль', ulData: [] });
      },
    );
  };

  return (
    <>
      <Modal />
      <form className="formMessage">
        <h3>
          Логин
          {' '}
          <input
            name="login"
            type="text"
            value={userName}
            onChange={({ target: { value } }) => {
              setUserName(value);
            }}
          />
        </h3>
        <h3>
          Пароль
          {' '}
          <input
            name="pass"
            type="password"
            value={userPassword}
            onChange={({ target: { value } }) => {
              setUserPassword(value);
            }}
          />
        </h3>
        <ButtonOk onClick={sendLogin} />
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

export default FormLogin;
