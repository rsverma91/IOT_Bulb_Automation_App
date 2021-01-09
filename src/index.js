import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { createHashHistory } from "history";

import "./index.css";
import App from "./App";

const history = createHashHistory();

const startApp = () => {
  ReactDOM.render(
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>,
    document.getElementById("root")
  );
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}
