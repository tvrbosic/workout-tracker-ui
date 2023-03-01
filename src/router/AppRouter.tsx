import { useRoutes } from 'react-router-dom';

import routes from 'router/routes';
import Layout from 'components/layout/Layout';
import Home from 'screens/home/Home';
import About from 'screens/about/about';
import Contact from 'screens/contact/Contact';
import Dashboard from 'screens/dashboard/Dashboard';
import Calendar from 'screens/calendar/Calendar';
import Workouts from 'screens/workouts/Workouts';
import Programs from 'screens/programs/Programs';

function AppRouter() {
  let element = useRoutes([
    {
      path: routes.root.path,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: routes.about.path, element: <About /> },
        { path: routes.contact.path, element: <Contact /> },
        { path: routes.dashboard.path, element: <Dashboard /> },
        { path: routes.calendar.path, element: <Calendar /> },
        { path: routes.workouts.path, element: <Workouts /> },
        { path: routes.programs.path, element: <Programs /> },
      ],
    },
  ]);

  return element;
}

export default AppRouter;
