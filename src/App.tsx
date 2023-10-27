import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import QueryClientProvider from './Providers/QueryClient';

function App() {
  return (
    <QueryClientProvider>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
