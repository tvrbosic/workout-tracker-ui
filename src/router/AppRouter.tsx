import { Routes, Route } from 'react-router-dom';

import routes from 'router/routes';
import MainLayout from 'components/layouts/MainLayout';
import Home from 'screens/home/Home';
import Login from 'screens/login/Login';
import About from 'screens/about/about';
import Contact from 'screens/contact/Contact';
import { useAuthContext } from 'context/AuthContext';
import Dashboard from 'screens/dashboard/Dashboard';
import Calendar from 'screens/calendar/Calendar';
import Workouts from 'screens/workouts/Workouts';
import CreateWorkout from 'screens/create-workout/CreateWorkout';
import Programs from 'screens/programs/Programs';
import Profile from 'screens/profile/Profile';
import ProtectedRoute from 'components/ProtectedRoute';

function AppRouter() {
  const { token } = useAuthContext();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={routes.root.path} element={<Home />} />
        <Route path={routes.about.path} element={<About />} />
        <Route path={routes.contact.path} element={<Contact />} />
        <Route path={routes.login.path} element={<Login />} />
        <Route element={<ProtectedRoute token={token} />}>
          <Route path={routes.dashboard.path} element={<Dashboard />} />
          <Route path={routes.calendar.path} element={<Calendar />} />
          <Route path={routes.workouts.path} element={<Workouts />} />
          <Route path={routes.createWorkouts.path} element={<CreateWorkout />} />
          <Route path={routes.programs.path} element={<Programs />} />
          <Route path={routes.profile.path} element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
