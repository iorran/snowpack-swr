import React from 'react';

import { Home } from 'src/pages/Home';
import { Nominations } from 'src/pages/Nominations';

import { Switch, Route } from 'react-router-dom';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nominations" component={Nominations} />
    </Switch>
  );
}
