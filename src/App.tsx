import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthContextProvider } from 'context/AuthContext';
import { ApiContextProvider } from 'context/ApiContext';
import AppRouter from 'router/AppRouter';

function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <ApiContextProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ApiContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
