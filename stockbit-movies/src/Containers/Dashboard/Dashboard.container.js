import React from 'react';

import DashboardComponent from './Dashboard.component';
import useDashboard from './Dashboard.hook';

const Dashboard = () => {
  const hooks = useDashboard();

  return (<DashboardComponent {...hooks} />)
}

export default Dashboard;
