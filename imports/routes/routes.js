import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../pages/App'
import SigninPage from '../pages/SigninPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SigninPage} />
      <Route path="signin" component={SigninPage} />
    </Route>
  </Router>
);