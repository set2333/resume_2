import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonAncor = ({ path, label }) => <Link to={path}>{label}</Link>;

ButtonAncor.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string
};

ButtonAncor.defaultProps = {
  path: "/",
  label: ""
};

export default ButtonAncor;
