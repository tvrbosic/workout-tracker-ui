import { useRoutes } from 'react-router-dom';

import routes from 'router/routes';
import MainLayout from 'components/MainLayout';
import Home from 'screens/home/Home';
import Login from 'screens/login/Login';
import About from 'screens/about/about';
import Contact from 'screens/contact/Contact';
import Dashboard from 'screens/dashboard/Dashboard';
import Calendar from 'screens/calendar/Calendar';
import Workouts from 'screens/workouts/Workouts';
import Programs from 'screens/programs/Programs';
import Settings from 'screens/settings/Settings';
import AuthenticatedRoute from 'components/AuthenticatedRoute';

function AppRouter() {
  let element = useRoutes([
    {
      path: routes.root.path,
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: routes.about.path, element: <About /> },
        { path: routes.contact.path, element: <Contact /> },
        {
          path: routes.dashboard.path,
          element: (
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          ),
        },
        {
          path: routes.calendar.path,
          element: (
            <AuthenticatedRoute>
              <Calendar />
            </AuthenticatedRoute>
          ),
        },
        {
          path: routes.workouts.path,
          element: (
            <AuthenticatedRoute>
              <Workouts />
            </AuthenticatedRoute>
          ),
        },
        {
          path: routes.programs.path,
          element: (
            <AuthenticatedRoute>
              <Programs />
            </AuthenticatedRoute>
          ),
        },
        {
          path: routes.settings.path,
          element: (
            <AuthenticatedRoute>
              <Settings />
            </AuthenticatedRoute>
          ),
        },
      ],
    },
    { path: routes.login.path, element: <Login /> },
  ]);

  return element;
}

export default AppRouter;
