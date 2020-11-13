import React from "react";
import MarketingApp from "./components/MarketingApp";

export default () => {
  return (
    <div>
      <h1>Hi from container</h1>
      <h3>invalidation test</h3>
      <hr />
      <MarketingApp />
    </div>
  );
};
