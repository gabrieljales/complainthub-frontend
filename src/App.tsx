import { RouterProvider } from 'react-router-dom';
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
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
