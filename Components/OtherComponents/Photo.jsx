import PropTypes from 'prop-types';

const Photo = ({
  image, width, height, float,
}) => (
  <>
    <div className="photo" />
    <style jsx>
      {`
        .photo {
          background: url(${image}) no-repeat center center / cover;
          margin: 10px;
          width: ${width}px;
          height: ${height}px;
          float: ${float};
        }
      `}
    </style>
  </>
);

Photo.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  float: PropTypes.string,
};

Photo.defaultProps = {
  image: '',
  width: 200,
  height: 300,
  float: 'left',
};

export default Photo;
