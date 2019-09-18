import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App />, document.getElementById("root"));
};

ReactDOM.render(<App />, document.getElementById("root"));
