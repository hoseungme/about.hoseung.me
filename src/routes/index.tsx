import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../pages";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
