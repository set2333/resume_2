import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  MenuButton: {
    fontFamily: "Bad Script, cursive",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    paddingTop: 40,
    textAlign: "center",
    listStyleType: "none",
    height: 150,
    backgroundImage: "url(images/Button.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    ":hover": {
      fontSize: 20
    }
  },
  Acent: {
    backgroundImage: "url(images/Button_acent.svg)"
  }
});

const MenuButton = ({ label, path, pathname }) => (
  <li
    className={css(
      styleSheet.MenuButton,
      path === pathname ? styleSheet.Acent : null
    )}
    key={label}
  >
    <Link to={path}>{label}</Link>
  </li>
);

MenuButton.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  pathname: PropTypes.string
};

MenuButton.defaultProps = {
  label: "",
  path: "/",
  pathname: "/"
};

export default MenuButton;
