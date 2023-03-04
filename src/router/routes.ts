const routes = {
  // Public
  root: {
    path: '/',
    name: 'Home',
    type: 'public',
  },
  login: {
    path: '/login',
    name: 'Login',
    type: 'public',
  },
  about: {
    path: '/about',
    name: 'About',
    type: 'public',
  },
  contact: {
    path: '/contact',
    name: 'Contact',
    type: 'public',
  },
  // Private
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    type: 'private',
  },
  calendar: {
    path: '/calendar',
    name: 'Calendar',
    type: 'private',
  },
  workouts: {
    path: '/workouts',
    name: 'Workouts',
    type: 'private',
  },
  programs: {
    path: '/programs',
    name: 'Programs',
    type: 'private',
  },
  settings: {
    path: '/settings',
    name: 'Settings',
    type: 'private',
  },
};

export default routes;
