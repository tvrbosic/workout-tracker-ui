import { ReactNode } from 'react';
import { Link } from '@chakra-ui/react';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'white.100'}
    _hover={{
      textDecoration: 'underline',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default NavLink;
