import { VStack } from '@chakra-ui/react';

import Hero from 'screens/home/components/Hero';
import ProductOverview from 'screens/home/components/AppMainFeatures';

export default function Home() {
  return (
    <VStack spacing={12}>
      <Hero />
      <ProductOverview />
      <div>TODO: Add component with content</div>
    </VStack>
  );
}
