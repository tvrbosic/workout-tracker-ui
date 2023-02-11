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
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

import ProductOverviewImage from '../../../assets/images/unsplash-braden-collum-1.jpg';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function ProductOverview() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={ProductOverviewImage}
            objectFit={'cover'}
          />
        </Flex>

        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={'blue.50'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={'gray.100'} />}>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={'yellow.100'}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={'green.100'}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={'purple.100'}
              text={'Market Analysis'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
