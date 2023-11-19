import React from "react";
import { Switch, Route } from "react-router-dom";

import { MainKo } from "./Main/Ko";
import { MainEn } from "./Main/En";
import { ExperienceKo } from "./Experience/Ko";
import { ExperienceEn } from "./Experience/En";

export function RouteSwitch() {
  return (
    <Switch>
      <Route exact path="/" component={MainKo} />
      <Route exact path="/experiences/:id" component={ExperienceKo} />

      <Route exact path="/en" component={MainEn} />
      <Route exact path="/en/experiences/:id" component={ExperienceEn} />
    </Switch>
  );
}
