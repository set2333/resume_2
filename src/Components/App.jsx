import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./Menu/Menu";
import getContent from "./Contents/getContent";
import ContentHome from "./Contents/ContentHome";
import ContentWork from "./Contents/ContentWork";
import ContentLive from "./Contents/ContentLive";
import ContentContacts from "./Contents/ContentContacts";
import { css, StyleSheet } from "aphrodite/no-important";

const styleSheet = StyleSheet.create({
  App: {
    width: 960,
    margin: "0 auto"
  }
});

function App() {
  return (
    <div className={css(styleSheet.App)}>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={getContent(ContentHome)} />
          <Route path="/work" component={getContent(ContentWork)} />
          <Route exact path="/live" component={getContent(ContentLive)} />
          <Route path="/contacts" component={getContent(ContentContacts)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
