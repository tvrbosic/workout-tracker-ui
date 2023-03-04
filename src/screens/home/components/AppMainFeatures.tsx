import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoBarbell, IoCalendar } from 'react-icons/io5';

import RunnerImage from 'assets/images/unsplash-braden-collum-1.jpg';
import AppFeature from 'screens/home/components/AppFeature';

export default function ProductOverview() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image rounded={'md'} alt={'App features image'} src={RunnerImage} objectFit={'cover'} />
        </Flex>

        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Main Features
          </Text>
          <Heading>Workout programs planning and tracking</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            WorkoutTracker enables you to manage and plan your workouts, create training programs
            and track your progress.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={'gray.50'} />}>
            <AppFeature
              icon={<Icon as={IoCalendar} color={'purple.500'} w={5} h={5} />}
              iconBg={'purple.100'}
              text={'Workouts tracking calendar'}
            />
            <AppFeature
              icon={<Icon as={IoBarbell} color={'green.500'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'Browse extensive exercises database'}
            />
            <AppFeature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={'yellow.100'}
              text={'Manage trainings and programs'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
