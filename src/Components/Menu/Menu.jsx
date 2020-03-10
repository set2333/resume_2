import React from "react";
import { withRouter } from "react-router-dom";
import MenuButton from "./MenuButton";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  nav: {
    width: 240,
    position: "fixed"
  }
});

const Menu = ({ location: { pathname } }) => (
  <nav className={css(styleSheet.nav)}>
    <ul>
      <MenuButton label="Главная" path="/" pathname={pathname} />
      <MenuButton label="О работе" path="/work" pathname={pathname} />
      <MenuButton label="О жизни" path="/live" pathname={pathname} />
      <MenuButton label="Контакты" path="/contacts" pathname={pathname} />
    </ul>
  </nav>
);

export default withRouter(Menu);
