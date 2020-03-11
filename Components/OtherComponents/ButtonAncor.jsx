import PropTypes from 'prop-types';
import Link from 'next/link';

const ButtonAncor = ({ path, label }) => (
  <>
    <Link href={path}>
      <a>{label}</a>
    </Link>
    <style jsx>
      {`
        a {
          text-decoration: none;
          color: black;
          font-weight: bold;
        }
      `}
    </style>
  </>
);

ButtonAncor.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

ButtonAncor.defaultProps = {
  path: '/',
  label: '',
};

export default ButtonAncor;
