// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Correct import to App.js in src

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
