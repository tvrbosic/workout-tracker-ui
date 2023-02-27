import { useAuthContext } from '../../context/AuthContext';
import NavLink from '../NavLink';

const PublicMenu = ['Home', 'About', 'Contact'];
const LoggedUserMenu = ['Dashboard', 'Calendar', 'Workouts', 'Programs'];

export default function NavMenu() {
  const authCtx = useAuthContext();

  return (
    <>
      {authCtx.user
        ? LoggedUserMenu.map((link) => <NavLink key={link}>{link}</NavLink>)
        : PublicMenu.map((link) => <NavLink key={link}>{link}</NavLink>)}
    </>
  );
}
