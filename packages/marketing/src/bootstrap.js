import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in development and isolation immediately mount app
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");

  if (root) {
    mount(root);
  }
}

// If we are in production export mount function
export { mount };
