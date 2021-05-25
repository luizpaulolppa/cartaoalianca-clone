import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Site from '../pages/Site';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Site} />
  </Switch>
);

export default Routes;
