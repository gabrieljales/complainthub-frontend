import {
  QueryClientProvider as BaseProvider,
  QueryClient,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function QueryClientProvider({ children }: PropsWithChildren) {
  return <BaseProvider client={queryClient}>{children}</BaseProvider>;
}

export default QueryClientProvider;
