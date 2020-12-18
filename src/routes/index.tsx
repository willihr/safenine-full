import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import UsersList from 'pages/UsersList';
import UserIndex from 'pages/UserIndex';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" exact component={UsersList} />
      <Route path="/users/:id" component={UserIndex} />
    </Switch>
  );
};

export default Routes;
