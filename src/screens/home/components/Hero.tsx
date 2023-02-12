import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import HeroImage from '../../../assets/images/unsplash-sven-mieke-1.jpg';
import Button from '../../../components/Button';

export default function Hero() {
  return (
    <Stack minH={'91dvh'} direction={{ base: 'column', md: 'row' }} bg={'blue.800'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} flexGrow={3}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text as={'span'} position={'relative'} color={'white.100'} fontWeight={'normal'}>
              Train with
            </Text>
            <br />{' '}
            <Flex>
              <Text color={'aquamarine.300'} as={'span'}>
                Workout
              </Text>
              <Text color={'white.100'}>Tracker</Text>
            </Flex>
          </Heading>

          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.300'}>
            WorkoutTracker is free web platform designed for fitness enthusiast, personal trainers
            and casual athletes which enables you to manage and plan your workouts, create training
            programs and track your progress. Sign up today and take advantage of WorkoutTracker to
            kick-start your gains.
          </Text>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button>Register Today</Button>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1} flexGrow={4}>
        <Image alt={'Login Image'} objectFit={'cover'} src={HeroImage} />
      </Flex>
    </Stack>
  );
}
