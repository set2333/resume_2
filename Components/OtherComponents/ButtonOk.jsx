import PropTypes from 'prop-types';

const ButtonOk = ({ onClick }) => (
  <>
    <div className="buttonOk" onClick={onClick}>
      <h2>OK</h2>
    </div>
    <style jsx>
      {`
        .buttonOk {
          position: relative;
          background-color: #38fbff;
          width: 75px;
          height: 30px;
          margin: 10px auto;
        }

        h2 {
          font-family: 'Bad Script', cursive;
          font-size: 16px;
          margin: 5px;
        }

        h2:hover {
          font-size: 20px;
        }
      `}
    </style>
  </>
);

ButtonOk.propTypes = {
  onClick: PropTypes.func,
};

ButtonOk.defaultProps = {
  onClick: () => {},
};

export default ButtonOk;
