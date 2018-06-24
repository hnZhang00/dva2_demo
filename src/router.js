import React from 'react';
import { Router, Route } from 'dva/router';
import { Switch } from 'react-router-dom';
import IndexPage from 'pages';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig;
