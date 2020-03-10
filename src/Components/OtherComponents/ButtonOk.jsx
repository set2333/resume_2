import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  buttonOk: {
    border: "1px solid black",
    borderRadius: 5,
    boxShadow: "3px 3px 5px black",
    position: "relative",
    backgroundColor: "#38FBFF",
    width: 75,
    height: 30,
    margin: "10px auto"
  },
  buttonOk_h2: {
    fontFamily: "Bad Script, cursive",
    fontSize: 16,
    margin: 5,
    ":hover": {
      fontSize: 20
    }
  }
});

const ButtonOk = ({ onClick }) => (
  <div className={css(styleSheet.buttonOk)} onClick={onClick}>
    <h2 className={css(styleSheet.buttonOk_h2)}>OK</h2>
  </div>
);

ButtonOk.propTypes = {
  onClick: PropTypes.func
};

ButtonOk.defaultProps = {
  onClick: () => {}
};

export default ButtonOk;
