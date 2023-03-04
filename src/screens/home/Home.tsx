import { VStack } from '@chakra-ui/react';

import Hero from 'screens/home/components/Hero';
import AppMainFeatures from 'screens/home/components/AppMainFeatures';

export default function Home() {
  return (
    <VStack spacing={12}>
      <Hero />
      <AppMainFeatures />
      <div>TODO: Component with content</div>
    </VStack>
  );
}
