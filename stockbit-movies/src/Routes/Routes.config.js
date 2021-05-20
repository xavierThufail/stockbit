import {
  Dashboard,
  Detail
} from '../Containers';
import routePaths from '../Constants/routePaths';

const routeConfig = [
  {
    path: routePaths.DASHBOARD,
    component: Dashboard,
    exact: true
  },
  {
    path: routePaths.DETAIL,
    component: Detail,
    exact: true
  }
];

export default routeConfig