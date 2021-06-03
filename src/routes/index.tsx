import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Site from '../pages/Site';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PersonalData from '../pages/PersonalData';
import Dependants from '../pages/Dependants';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Site} />
    <Route path="/app/login" exact component={Login} />
    <Route path="/app/home" exact component={Home} />
    <Route path="/app/dados-pessoais" exact component={PersonalData} />
    <Route path="/app/dependentes" exact component={Dependants} />
    <Route path="/app/alterar-senha" exact component={ResetPassword} />
  </Switch>
);

export default Routes;
