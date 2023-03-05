import { Input as CInput, InputProps, forwardRef } from '@chakra-ui/react';

const Input = forwardRef(({ ...rest }: InputProps, ref) => {
  return <CInput ref={ref} focusBorderColor={'blue.800'} {...rest} />;
});
export default Input;
