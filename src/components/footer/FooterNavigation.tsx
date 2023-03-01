import { useAuthContext } from 'context/AuthContext';
import { Link } from '@chakra-ui/react';
import routes from 'router/routes';

export default function NavMenu() {
  const authCtx = useAuthContext();

  return (
    <>
      {authCtx.user ? (
        <>
          <Link href={routes.dashboard.path} key={routes.dashboard.name}>
            {routes.dashboard.name}
          </Link>
          <Link href={routes.calendar.path} key={routes.calendar.name}>
            {routes.calendar.name}
          </Link>
          <Link href={routes.workouts.path} key={routes.workouts.name}>
            {routes.workouts.name}
          </Link>
          <Link href={routes.programs.path} key={routes.programs.name}>
            {routes.programs.name}
          </Link>
        </>
      ) : (
        <>
          <Link href={routes.root.path} key={routes.root.name}>
            {routes.root.name}
          </Link>
          <Link href={routes.about.path} key={routes.about.name}>
            {routes.about.name}
          </Link>
          <Link href={routes.contact.path} key={routes.contact.name}>
            {routes.contact.name}
          </Link>
        </>
      )}
    </>
  );
}
