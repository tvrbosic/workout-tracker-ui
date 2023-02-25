import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { AuthContextProvider } from './context/AuthContext';
import { ApiContextProvider } from './context/ApiContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ChakraProvider theme={theme}>
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
