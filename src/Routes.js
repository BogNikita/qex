import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Main from './pages/Main';
import News from './pages/News';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/news" exact component={News} />
      <Route path="/auth" exact component={Authorization} />
      <Route path="/profile" exact component={Profile} />
      <Redirect to="/" />
    </Switch>
  );
}
