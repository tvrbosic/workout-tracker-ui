import React from 'react';
import { Button as CButton, ButtonProps, Spinner } from '@chakra-ui/react';

interface IButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: IButtonProps) {
  return (
    <CButton
      px={6}
      py={2}
      fontSize="sm"
      color={'gray.800'}
      bg={'aquamarine.300'}
      transition={'all 200ms linear'}
      _hover={{
        bg: 'aquamarine.600',
      }}
      spinner={<Spinner color="gray.800" emptyColor="gray.200" />}
      {...rest}
    >
      {children}
    </CButton>
  );
}
