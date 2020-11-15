import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  // if in development use defaultHistory(BrowserHistory), if not use memory history
  let history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and isolation immediately mount app
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_auth-dev-root");

  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

// If we are in production export mount function
export { mount };
