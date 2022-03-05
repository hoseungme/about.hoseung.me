import React from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import { Main } from "./Main";

export function RouteSwitch() {
  const history = useHistory();
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.action !== "POP") {
        window.scrollTo(0, 0);
      }
    });
    return () => unlisten();
  }, [history]);

  return (
    <Switch>
      <Route path="" component={Main} />
    </Switch>
  );
}
