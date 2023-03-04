import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Stack,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Link,
  Checkbox,
  useToast,
} from '@chakra-ui/react';

import { useAuthContext } from 'context/AuthContext';
import { useApiContext } from 'context/ApiContext';
import { ILoginCredentials } from 'ts/definitions';
import { validateEmail } from 'utils/validations';
import routes from 'router/routes';
import Input from 'components/Input';
import Button from 'components/Button';

export default function LoginForm() {
  const { api, error, clearError } = useApiContext();
  const { setAuthToken } = useAuthContext();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginCredentials>();

  const onFormSubmit = async (data: ILoginCredentials) => {
    // Clear previous error if it exists
    clearError();
    const response = await api.login({
      email: data.email,
      password: data.password,
    });
    // On success set user's jwt token and redirect to dashboard
    setAuthToken(response.access);
    navigate(routes.dashboard.path);
  };

  // Console log error inside useEffect if it exists
  useEffect(() => {
    if (error) {
      toast({
        title: 'An error occurred',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    clearError();
  }, [error, toast, clearError]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            {...register('email', {
              required: 'Email field must not be empty!',
              validate: (value) => validateEmail(value) || 'Invalid email address!',
            })}
          />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            {...register('password', { required: 'Password field must not be empty!' })}
          />
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
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
          <Button borderRadius={'md'} type="submit">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
