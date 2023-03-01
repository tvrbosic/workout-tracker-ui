import React from 'react';
import { Input as CInput, InputProps } from '@chakra-ui/react';

export default function Input({ ...rest }: InputProps) {
  return (
    <CInput
      color={'gray.50'}
      borderColor={'gray.300'}
      focusBorderColor={'blue.400'}
      transition={'all 200ms linear'}
      {...rest}
    />
  );
}
