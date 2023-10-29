import { RouterProvider } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';
import { router } from './routes/router';
import QueryClientProvider from './providers/QueryClient';

/**
 * Componente App.
 *
 * Este componente fornece um provedor de consulta e um provedor de roteador para seus filhos.
 */
function App() {
  return (
    <QueryClientProvider>
      <RouterProvider
        fallbackElement={
          <Flex
            alignItems='center'
            height='full'
            justifyContent='center'
            width='full'
          >
            <Spinner />
          </Flex>
        }
        router={router}
      />
      ;
    </QueryClientProvider>
  );
}

export default App;
