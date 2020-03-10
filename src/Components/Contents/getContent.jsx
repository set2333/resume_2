import React from "react";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  content: {
    float: "right",
    width: 720,
    textAlign: "center",
    marginTop: 25,
    padding: 20,
    minHeight: "95vh",
    border: "1px solid black",
    borderRadius: 5,
    boxShadow: "3px 3px 5px black",
    borderTop: "none",
    background:
      "url(images/note.svg) repeat-x top left / 36px auto, url(images/cel.svg)"
  }
});

const getContent = WrappedComponent => {
  return () => (
    <div className={css(styleSheet.content)}>
      <WrappedComponent />
    </div>
  );
};

export default getContent;
