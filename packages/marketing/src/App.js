import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    // To prevent css class name collision add this prop
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
