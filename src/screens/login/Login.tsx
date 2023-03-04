import { useNavigate } from 'react-router-dom';
import { Flex, Box, Stack, Link, Heading } from '@chakra-ui/react';

import routes from 'router/routes';
import LoginForm from 'screens/login/LoginForm';

export default function SimpleCard() {
  const navigate = useNavigate();

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} color={'green.300'} bg={'gray.800'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'gray.700'} boxShadow={'lg'} p={8}>
          <LoginForm />
        </Box>
        <Link onClick={() => navigate(routes.root.path)} textAlign={'center'}>
          Return to Homepage
        </Link>
      </Stack>
    </Flex>
  );
}
