import React from 'react';
import { Input as CInput, InputProps } from '@chakra-ui/react';

export default function Input({ ...rest }: InputProps) {
  return (
    <CInput
      color={'gray.50'}
      bg={'whiteAlpha.100'}
      border={0}
      transition={'all 200ms linear'}
      focusBorderColor={'blue.800'}
      _focus={{
        bg: 'whiteAlpha.200',
      }}
      {...rest}
    />
  );
}
