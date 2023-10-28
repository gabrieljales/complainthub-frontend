import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import QueryClientProvider from './providers/QueryClient';

function App() {
  return (
    <QueryClientProvider>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
