import React from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import { Main } from "./Main";
import { Experience } from "./Experience";

import { GA } from "../services/ga";

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
      <Route exact path="/" component={Main} />
      <Route exact path="/experiences/:id" component={Experience} />
    </Switch>
  );
}
