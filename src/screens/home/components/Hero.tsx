import { Stack, Flex, Heading, Text, VStack } from '@chakra-ui/react';

import HeroImage from 'assets/images/unsplash-sven-mieke-1.jpg';
import Button from 'components/Button';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={HeroImage}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={{ base: 4, md: 8 }}
        bgGradient={'linear(to-b, transparent 5%, blackAlpha.700, transparent 95%)'}
      >
        <Stack maxW={'2xl'} alignItems={'center'} spacing={10}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign="center">
            <Text as={'span'} color={'gray.50'}>
              The&nbsp;
            </Text>
            <Text as={'span'} color={'green.400'}>
              body&nbsp;
            </Text>
            <Text as={'span'} color={'gray.50'}>
              achieves what the&nbsp;
            </Text>
            <Text as={'span'} color={'green.400'}>
              mind&nbsp;
            </Text>
            <Text as={'span'} color={'gray.50'}>
              believes.
            </Text>
          </Heading>
          <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.50'} align="center">
            WorkoutTracker is free web platform designed for fitness enthusiast, personal trainers
            and casual athletes. Sign up today and take advantage of WorkoutTracker to kick-start
            your training.
          </Text>

          <Stack direction={'row'}>
            <Button px={10} py={6} fontSize="md">
              Register Today
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
