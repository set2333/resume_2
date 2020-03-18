// Контент страницы с сообщениями
import { useReducer, useEffect } from 'react';
import sendAjax from '../../Function/sendAjax';
import useModal from '../OtherComponents/useModal';
import Message from '../OtherComponents/Message';

const initialState = {
  curentPage: 1,
  messages: [],
  countPage: 1,
  countMessagesOnePage: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_FROM_SERVER': {
      return { ...action.value };
    }
    case 'SET_CURENT_PAGE':
      return { ...state };
    default:
      return { ...state };
  }
};

const ContentMessages = () => {
  const [Modal, open] = useModal(Message);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getMessagesFromServer = (numPage) => {
    const query = sendAjax('/getmessages', { numberPage: numPage - 1 });
    query.subscribe(
      (response) => {
        if (response.status === 200) {
          const data = JSON.parse(response.response);
          const count = data.count / data.countMessagesOnePage;
          dispatch({
            type: 'GET_MESSAGE_FROM_SERVER',
            value: {
              countPage: count > Math.floor(count) ? Math.floor(count) + 1 : Math.floor(count),
              countMessagesOnePage: data.countMessagesOnePage,
              messages: data.messages,
              curentPage: numPage,
            },
          });
        }
      },
      () => {},
    );
  };

  const deleteMessageFromServer = (id) => {
    const query = sendAjax('/deletemessage', { id });
    query.subscribe((response) => {
      if (response.status === 200) {
        open({ head: 'Удалено', text: 'Сообщение успешно удаленно', ulData: [] });
        getMessagesFromServer(state.curentPage);
      } else open({ head: 'Ошибка', text: 'Не удалось удалить сообщение', ulData: [] });
    });
  };

  const getOneMessageFromServer = (id) => {
    const query = sendAjax('/getmessage', { id });
    query.subscribe((response) => {
      if (response.status === 200) {
        open({
          head: `От:${response.response.autor}`,
          text: response.response.message,
          ulData: [response.response.date, response.response.adress],
        });
        getMessagesFromServer(state.curentPage);
      }
    });
  };

  useEffect(() => {
    getMessagesFromServer(1);
  }, []);

  const setPage = (numPage) => {
    getMessagesFromServer(numPage);
  };

  const upPage = () => {
    getMessagesFromServer(state.curentPage + 1);
  };
  const downPage = () => {
    getMessagesFromServer(state.curentPage - 1);
  };

  const buttonUp = state.curentPage === state.countPage ? null : (
    <>
      <div className="btnFlip" onClick={upPage}>
        +
      </div>
      <style jsx>
        {`
            .btnFlip {
              display: inline-block;
              background: #65e841;
              width: 22px;
              height: 22px;
              margin: 0 10px 0 10px;
              border: 1px solid black;
            }
          `}
      </style>
    </>
  );
  const buttonDown = state.curentPage === 1 ? null : (
    <>
      <div className="btnFlip" onClick={downPage}>
        -
      </div>
      <style jsx>
        {`
            .btnFlip {
              display: inline-block;
              background: #65e841;
              width: 22px;
              height: 22px;
              margin: 0 10px 0 10px;
              border: 1px solid black;
            }
          `}
      </style>
    </>
  );
  return (
    <>
      <Modal />
      <h1>Все сообщения</h1>
      <div className="flipper">
        <p>
          {buttonDown}
          <input
            type="text"
            value={state.curentPage}
            onChange={({ target: { value } }) => setPage(value)}
          />
          {' '}
          /
          {' '}
          {state.countPage}
          {buttonUp}
        </p>
      </div>
      <table className="tebleMessages">
        <tr>
          <th>Автор</th>
          <th>Обратный адрес</th>
          <th>Дата</th>
        </tr>
        {state.messages.map((item) => (
          <tr
            className={!item.readed ? 'noReaded' : ''}
            onClick={getOneMessageFromServer.bind(null, item.id)}
          >
            <td>{item.autor}</td>
            <td>{item.adress}</td>
            <td>
              {item.date}
              <div
                className="ButtonDelete"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteMessageFromServer(item.id);
                }}
                idMessage={item.id}
              />
            </td>
          </tr>
        ))}
      </table>
      <style jsx>
        {`
          .tebleMessages {
            width: 90%;
            margin: 0 auto;
          }

          .tebleMessages td,
          .tebleMessages th {
            border: 1px solid black;
            text-align: center;
          }

          .noReaded {
            font-weight: bold;
          }

          .flipper input {
            width: 40px;
          }

          .ButtonDelete {
            background: url(/images/ButtonDelete.svg) no-repeat center / contain;
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-left: 20px;
          }
        `}
      </style>
    </>
  );
};

export default ContentMessages;
