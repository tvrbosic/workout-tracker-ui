import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

function MainLayout() {
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

export default MainLayout;