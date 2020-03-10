import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  listItem: {
    listStyle: "none",
    background: "url(images/marker.svg) no-repeat left / contain",
    textAlign: "left",
    paddingLeft: 20
  }
});

const ListItem = ({ children }) => (
  <li className={css(styleSheet.listItem)}>{children}</li>
);

ListItem.propTypes = {
  children: PropTypes.string
};

ListItem.defaultProps = {
  children: ""
};

export default ListItem;
