import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite/no-important";

const Photo = ({ image, width, height, float }) => {
  const styleSheet = StyleSheet.create({
    photo: {
      background: `url(${image}) no-repeat center center / cover`,
      margin: 10,
      border: "1px solid black",
      borderRadius: 5,
      boxShadow: "3px 3px 5px black",
      width,
      height,
      float
    }
  });
  return <div className={css(styleSheet.photo)} />;
};

Photo.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  float: PropTypes.string
};

Photo.defaultProps = {
  image: "",
  width: 200,
  height: 300,
  float: "left"
};

export default Photo;
