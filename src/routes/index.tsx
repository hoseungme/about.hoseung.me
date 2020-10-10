import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>home</div>} />
    </Switch>
  );
};
