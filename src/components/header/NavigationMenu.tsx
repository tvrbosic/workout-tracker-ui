import { useAuthContext } from '../../context/AuthContext';
import NavLink from '../NavLink';

const PublicMenu = [
  { text: 'Home', route: '/' },
  { text: 'About', route: '/about' },
  { text: 'Contact', route: '/contact' },
];
const LoggedUserMenu = [
  { text: 'Dashboard', route: '/dashboard' },
  { text: 'Calendar', route: '/calendar' },
  { text: 'Workouts', route: '/workouts' },
  { text: 'Programs', route: '/programs' },
];

export default function NavMenu() {
  const authCtx = useAuthContext();

  return (
    <>
      {authCtx.user
        ? LoggedUserMenu.map((link) => (
            <NavLink to={link.route} key={link.text}>
              {link.text}
            </NavLink>
          ))
        : PublicMenu.map((link) => (
            <NavLink to={link.route} key={link.text}>
              {link.text}
            </NavLink>
          ))}
    </>
  );
}
