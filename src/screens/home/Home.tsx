import { VStack } from '@chakra-ui/react';

import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import ProductFeatures from './components/ProductFeatures';

export default function Home() {
  return (
    <VStack spacing={12}>
      <Hero />
      <ProductOverview />
      <ProductFeatures />
    </VStack>
  );
}
