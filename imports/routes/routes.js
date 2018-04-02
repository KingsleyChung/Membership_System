import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../pages/App'
import Signin from '../components/Signin';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signin} />
      <Route path="signin" component={Signin} />
    </Route>
  </Router>
);