import { Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate('/');

  return (
    <Flex as={'button'} fontSize={18} fontWeight="bold" onClick={clickHandler}>
      <Text color={'aquamarine.300'}>Workout</Text>
      <Text color={'white.100'}>Tracker</Text>
    </Flex>
  );
};

export default Logo;
