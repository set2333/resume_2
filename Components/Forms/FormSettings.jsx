import { useReducer, useEffect } from 'react';
import ButtonOk from '../OtherComponents/ButtonOk';
import sendAjax from '../../Function/sendAjax';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      return action.value;
    case 'SET_STATE':
      return { ...state, ...action.value };
    default:
      throw new Error('Не известный тип действия');
  }
};

const FormSettings = () => {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    sendAjax('/getsettings').subscribe(({ response }) => {
      dispatch({ type: 'INITIAL', value: response });
    });
  }, []);

  const sendSettings = () => {
    const settings = {
      admin: {
        login: state.login,
        pass: state.pass || undefined,
      },
      email: {
        user: state.emaillogin,
        pass: state.emailpass || undefined,
        host: state.emailhost,
        port: state.emailport,
        secure: state.emailsecure,
        mail: state.email,
        sendmail: state.sendmail,
      },
      settings: {
        sendAdmLogin: state.sendAdmLogin,
        countMessagesOnePage: +state.countMessagesOnePage,
      },
    };
    sendAjax('/setsettings', settings).subscribe((response) => console.log(response.status));
  };

  return (
    <>
      <div className="form_message">
        <form>
          <h3>
            Логин администратора
            {' '}
            <input
              name="login"
              type="text"
              value={state.login}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { login: value } })}
            />
          </h3>
          <h3>
            Пароль администратора
            {' '}
            <input
              name="pass"
              type="password"
              value={state.pass}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { pass: value } })}
            />
          </h3>
          <h3>
            Сообщать о входе администратора на почту
            {' '}
            <input
              name="sendAdmLogin"
              type="checkbox"
              checked={state.sendAdmLogin}
              onChange={({ target: { checked } }) => dispatch({ type: 'SET_STATE', value: { sendAdmLogin: checked } })}
            />
          </h3>
          <h3>
            Количество сообщений на странице
            {' '}
            <input
              name="countMessagesOnePage"
              type="text"
              value={state.countMessagesOnePage}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { countMessagesOnePage: value } })}
            />
          </h3>
          <h3>
            Отправлять сообщения на email
            {' '}
            <input
              name="sendmail"
              type="checkbox"
              checked={state.sendmail}
              onChange={({ target: { checked } }) => dispatch({ type: 'SET_STATE', value: { sendmail: checked } })}
            />
          </h3>
          <h3>
            Адрес почты
            {' '}
            <input
              name="emaillogin"
              type="text"
              value={state.emaillogin}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { emaillogin: value } })}
            />
          </h3>
          <h3>
            Пароль почты
            {' '}
            <input
              name="emailpass"
              type="password"
              value={state.emailpass}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { emailpass: value } })}
            />
          </h3>
          <h3>
            Сервер почты
            {' '}
            <input
              name="emailhost"
              type="text"
              value={state.emailhost}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { emailhost: value } })}
            />
          </h3>
          <h3>
            Порт почты
            {' '}
            <input
              name="emailport"
              type="text"
              value={state.emailport}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { emailport: value } })}
            />
          </h3>
          <h3>
            Безопасность
            {' '}
            <input
              name="emailsecure"
              type="checkbox"
              checked={state.emailsecure}
              onChange={({ target: { checked } }) => dispatch({ type: 'SET_STATE', value: { emailsecure: checked } })}
            />
          </h3>
          <h3>
            Адрес для получения почты
            {' '}
            <input
              name="email"
              type="text"
              value={state.email}
              onChange={({ target: { value } }) => dispatch({ type: 'SET_STATE', value: { email: value } })}
            />
          </h3>
          <ButtonOk onClick={sendSettings} />
        </form>
      </div>
      <style jsx>
        {`
        .form_message {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
          background: #65e841;
        }

        .form_message textarea {
          width: 90%;
          height: 100px;
        }

        .form_message h3 {
          text-align: left;
          padding: 10px 30px;
        }

        .form_message input {
          margin-left: 10px;
        }
      `}
      </style>
    </>
  );
};

export default FormSettings;
