import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthContextProvider } from 'context/AuthContext';
import { ApiContextProvider } from 'context/ApiContext';
import theme from 'theme/theme';
import AppRouter from 'router/AppRouter';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ApiContextProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </ApiContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
