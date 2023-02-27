import { ReactNode } from 'react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

interface INavLinkProps {
  children: ReactNode;
  to: string;
}

const NavLink = ({ children, to }: INavLinkProps) => (
  <Link
    to={to}
    as={ReactRouterLink}
    px={2}
    py={1}
    borderBottom={'2px solid transparent'}
    color={'white.100'}
    transition={'all 200ms linear'}
    _hover={{
      borderBottom: '2px solid',
      borderColor: 'white.100',
    }}
    _activeLink={{
      borderBottom: '2px solid',
      borderColor: 'white.100',
    }}
  >
    {children}
  </Link>
);

export default NavLink;
