import React from 'react';
import { Button as CButton, ButtonProps, Spinner } from '@chakra-ui/react';

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: IProps) {
  return (
    <CButton
      rounded={'full'}
      px={6}
      py={2}
      fontSize="sm"
      color={'blue.800'}
      bg={'aquamarine.300'}
      _hover={{
        bg: 'aquamarine.500',
      }}
      spinner={<Spinner color="blue.800" emptyColor="gray.200" />}
      {...rest}
    >
      {children}
    </CButton>
  );
}
