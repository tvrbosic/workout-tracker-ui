import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Link,
  Heading,
} from '@chakra-ui/react';

import routes from 'router/routes';
import Input from 'components/Input';
import Button from 'components/Button';

export default function SimpleCard() {
  const navigate = useNavigate();

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      color={'aquamarine.300'}
      bg={'gray.800'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'gray.700'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox borderColor={'gray.300'}>Remember me</Checkbox>
                <Link>Forgot password?</Link>
              </Stack>
              <Button borderRadius={'md'}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
        <Link onClick={() => navigate(routes.root.path)} textAlign={'center'}>
          Return to Homepage
        </Link>
      </Stack>
    </Flex>
  );
}
