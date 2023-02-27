import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import Header from '../header/Header';
import Footer from './Footer';

function Layout() {
  return (
    <Flex flexDirection="column">
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
