import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </Router>
    </StylesProvider>
  );
};
