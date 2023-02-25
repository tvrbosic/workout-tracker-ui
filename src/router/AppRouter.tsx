import { useRoutes } from 'react-router-dom';

import Home from '../screens/home/Home';
import Layout from '../components/layout/Layout';

function AppRouter() {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'route', element: <div>Another route placeholder</div> },
      ],
    },
  ]);

  return element;
}

export default AppRouter;
