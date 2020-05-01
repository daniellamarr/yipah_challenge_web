import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import ViewTransaction from './ViewTransaction';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/view/:tnx_id" component={ViewTransaction} />
    </Switch>
  )
}

export default Routes;
