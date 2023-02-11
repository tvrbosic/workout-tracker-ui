import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('blue.800', 'blue.800')}>
      
      <Flex flex={1} px={{md: 10}} pt={{md: 20}} pb={{md: 32}}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          borderRadius={{md: 32}}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>

      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={useColorModeValue('white.100', 'white.100')}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'aquamarine.300'} as={'span'}>
              Design Projects
            </Text>{' '}
          </Heading>

          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.300'}>
            The project board is an exclusive resource for contract work. It's perfect for
            freelancers, agencies, and moonlighters.
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'aquamarine.300'}
              color={'blue.800'}
              _hover={{
                bg: 'aquamarine.500',
              }}>
              Register Today
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
