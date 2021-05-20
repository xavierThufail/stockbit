import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWrapper from './Routes.wrapper';
import routeConfig from './Routes.config';

const routeMapper = (route, index) => (
  <RouteWrapper key={index} {...route} />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routeConfig.map(routeMapper)}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;