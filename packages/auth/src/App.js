import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const SigninLazy = lazy(() => import("./components/Signin"));
const SignUpLazy = lazy(() => import("./components/Signup"));

export default ({ history, onSignIn }) => {
  return (
    // To prevent css class name collision add this prop
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path="/auth/signin"
              render={(props) => <SigninLazy {...props} onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              render={(props) => <SignUpLazy {...props} onSignIn={onSignIn} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
