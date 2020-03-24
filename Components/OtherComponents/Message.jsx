// Модальное окно сообщения
import PropTypes from 'prop-types';
import ButtonOk from './ButtonOk';

const Message = ({ head, text, ulData }) => (
  <>
    <div className="messageBG">
      <div className="message">
        <h1>{head}</h1>
        <p>{text}</p>
        <ul>
          {ulData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ButtonOk onClick={Message.close} />
      </div>
    </div>
    <style jsx>
      {`
        .messageBG {
          width: 100vw;
          height: 100vh;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .message {
          position: relative;
          overflow-y: auto;
          padding: 20px;
          width: 360px;
          height: 360px;
          text-align: center;
          background: url(/images/note_transparent.svg) repeat-x top left / 36px auto,
            url(/images/cel.svg);
          background-color: beige;
          border-top: none;
          top: 200px;
          margin: auto;
        }

        @media (min-width: 421px) and (max-width: 768px) {
          .message {
            padding: 20px;
            width: 240px;
            height: 240px;
            top: 120px;
            position: fixed;
          }

          .messageBG {
            left: 100px;
          }
        }
      `}
    </style>
  </>
);

Message.propTypes = {
  head: PropTypes.string,
  text: PropTypes.string,
  ulData: PropTypes.arrayOf(PropTypes.string),
};

Message.defaultProps = {
  head: '',
  text: '',
  ulData: [],
};

export default Message;
