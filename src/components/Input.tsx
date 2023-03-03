import { Input as CInput, InputProps, forwardRef } from '@chakra-ui/react';

const Input = forwardRef(({ ...rest }: InputProps, ref) => {
  return (
    <CInput
      ref={ref}
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
});
export default Input;
