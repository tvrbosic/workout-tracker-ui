import { Flex, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Flex fontSize={18} fontWeight="bold">
      <Text color={'aquamarine.300'}>Workout</Text>
      <Text color={'white.100'}>Tracker</Text>
    </Flex>
  );
};

export default Logo;
