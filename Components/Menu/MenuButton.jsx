import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MenuButton = ({ label, path }) => {
  const router = useRouter();
  return (
    <>
      <div className={`nav_button ${path === router.pathname ? 'acent' : ''}`}>
        <li key={label}>
          <Link href={path}>
            <a href={path}>{label}</a>
          </Link>
        </li>
      </div>
      <style jsx>
        {`
          .nav_button {
            font-family: 'Bad Script', cursive;
            font-size: 16px;
            padding: 10px;
            padding-top: 40px;
            text-align: center;
            list-style-type: none;
            height: 150px;
            background-image: url(/images/Button.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
          }

          .nav_button:hover {
            font-size: 20px;
          }

          .acent {
            background-image: url(/images/Button_acent.svg);
          }

          .nav_button a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

MenuButton.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  // pathname: PropTypes.string
};

MenuButton.defaultProps = {
  label: '',
  path: '/',
  // pathname: "/"
};

export default MenuButton;
