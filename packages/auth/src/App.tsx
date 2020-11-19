import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

interface IAppProps {
  history: any;
  onSignIn: () => void;
}

const App = ({ history, onSignIn }: IAppProps) => {
  return (
    // To prevent css class name collision add this prop
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route
            path="/auth/signin"
            render={(props) => <SignIn {...props} onSignIn={onSignIn} />}
          />
          <Route
            path="/auth/signup"
            render={(props) => <SignUp {...props} onSignIn={onSignIn} />}
          />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
