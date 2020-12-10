import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import "./resources/vars.sass";
import "./resources/main.sass";

import ErrorBoundry from "./components/error-boundry";
import App from "./components/app";

import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);

import "./resources/media.sass";
