import {
  QueryClientProvider as BaseProvider,
  QueryClient,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

/**
 * Componente QueryClientProvider.
 *
 * Este componente fornece um cliente de consulta do React Query para seus filhos.
 *
 * @param {PropsWithChildren} children - Os componentes filhos.
 */
function QueryClientProvider({ children }: PropsWithChildren) {
  return <BaseProvider client={queryClient}>{children}</BaseProvider>;
}

export default QueryClientProvider;
