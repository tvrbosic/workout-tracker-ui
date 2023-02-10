import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './components/layout/Layout';

function App() {
  return (
    <ChakraProvider>
      <Layout>Hello world!</Layout>
    </ChakraProvider>
  );
}

export default App;
