import React from 'react';
import { Route } from 'react-router-dom';

import { AppLayout } from '../Components';

const RouteWrapper = ({ component: Component, ...props }) => {
  return (
    <Route {...props}>
      <AppLayout>
        <Component />
      </AppLayout>
    </Route>
  );
};

export default RouteWrapper;