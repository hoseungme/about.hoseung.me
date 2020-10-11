import React from "react";
import { Switch, Route } from "react-router-dom";

import { Main } from "../pages/Main";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
};
