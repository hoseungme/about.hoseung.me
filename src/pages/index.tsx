import React from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import { MainKo } from "./Main/Ko";
import { MainEn } from "./Main/En";
import { ExperienceKo } from "./Experience/Ko";
import { ExperienceEn } from "./Experience/En";

import { GA } from "services/ga";

export function RouteSwitch() {
  const history = useHistory();

  React.useEffect(() => {
    GA.trackPageView({ path: window.location.pathname });

    const unlisten = history.listen((location, action) => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
      }
      GA.trackPageView({ path: location.pathname });
    });
    return () => unlisten();
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
