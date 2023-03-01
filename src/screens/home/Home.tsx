import { VStack } from '@chakra-ui/react';

import Hero from 'screens/home/components/Hero';
import ProductOverview from 'screens/home/components/AppMainFeatures';
import ProductFeatures from 'screens/home/components/ProductFeatures';

export default function Home() {
  return (
    <VStack spacing={12}>
      <Hero />
      <ProductOverview />
      <ProductFeatures />
    </VStack>
  );
}
