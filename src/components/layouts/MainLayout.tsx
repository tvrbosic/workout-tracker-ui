import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Box, useToast } from '@chakra-ui/react';

import { useApiContext } from 'context/ApiContext';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

function MainLayout() {
  const { error, clearError } = useApiContext();
  const toast = useToast();

  // Display error toast message if error exists
  useEffect(() => {
    // Clear error before displaying toast
    clearError();
    if (error) {
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error, toast, clearError]);

  return (
    <Flex flexDirection="column" bgColor={'gray.50'}>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
}

export default MainLayout;
