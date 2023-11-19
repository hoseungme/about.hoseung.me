import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { MainKo } from "./Main/Ko";
import { MainEn } from "./Main/En";
import { ExperienceKo } from "./Experience/Ko";
import { ExperienceEn } from "./Experience/En";

export function RouteSwitch() {
  const history = useHistory();

  useEffect(() => {
    history.listen((_, action) => {
      if (action !== "POP") {
        window.scrollTo({ top: 0 });
      }
    });
  }, [history]);

  return (
    <Switch>
      <Route exact path="/" component={MainKo} />
      <Route exact path="/experiences/:id" component={ExperienceKo} />

      <Route exact path="/en" component={MainEn} />
      <Route exact path="/en/experiences/:id" component={ExperienceEn} />
    </Switch>
  );
}
