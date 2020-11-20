import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createMemoryHistory,
  createBrowserHistory,
  MemoryHistory,
  History,
} from "history";

interface IMountOptions {
  defaultHistory?: History;
  initialPath?: string;
  onSignIn?: () => void;
  onNavigate?: ({ pathname }: { pathname: string }) => void;
}

// Mount function to start the app
const mount = (
  el: Element,
  { onNavigate, defaultHistory, initialPath, onSignIn }: IMountOptions,
) => {
  // if in development use defaultHistory(BrowserHistory), if not use memory history
  let history: MemoryHistory | History =
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

// If we are in development mount app
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_auth-dev-root");

  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

// If we are in production export mount function
export default mount;
