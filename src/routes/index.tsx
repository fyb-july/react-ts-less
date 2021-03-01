import PrivateRoute from './privateRoutes';
import Home from '../home/home';
import Braft from "../Braft/Braft"

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
  {
    path:"/braft",
    component:Braft
  }
]
export { PrivateRoute };
export default routes;
