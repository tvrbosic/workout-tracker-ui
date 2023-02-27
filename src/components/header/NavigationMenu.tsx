import { useAuthContext } from '../../context/AuthContext';
import routes from '../../router/routes';
import NavLink from '../NavLink';

export default function NavMenu() {
  const authCtx = useAuthContext();

  return (
    <>
      {authCtx.user ? (
        <>
          <NavLink to={routes.dashboard.path} key={routes.dashboard.name}>
            {routes.dashboard.name}
          </NavLink>
          <NavLink to={routes.calendar.path} key={routes.calendar.name}>
            {routes.calendar.name}
          </NavLink>
          <NavLink to={routes.workouts.path} key={routes.workouts.name}>
            {routes.workouts.name}
          </NavLink>
          <NavLink to={routes.programs.path} key={routes.programs.name}>
            {routes.programs.name}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to={routes.root.path} key={routes.root.name}>
            {routes.root.name}
          </NavLink>
          <NavLink to={routes.about.path} key={routes.about.name}>
            {routes.about.name}
          </NavLink>
          <NavLink to={routes.contact.path} key={routes.contact.name}>
            {routes.contact.name}
          </NavLink>
        </>
      )}
    </>
  );
}
