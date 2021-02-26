import PrivateRoute from './privateRoutes';
import Home from '../home/home';


const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
]
export { PrivateRoute };
export default routes;
