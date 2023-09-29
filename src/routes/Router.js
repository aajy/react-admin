import routes from '@/routes';
import { Route, Routes } from 'react-router-dom';

const Router = () =>{
  <Routes>{getRoutes(routes)}</Routes>
}

const getRoutes = (routes) => {
  return routes.map((route, index) => {
    return (
      <Route key={route.path || index} path={route.path} element={route.element}>
        {route.children && getRoutes(route.children)}
      </Route>
    );
  });
};

export default Router