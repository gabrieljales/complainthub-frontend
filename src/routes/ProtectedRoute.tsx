import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAuth } from '../context/Auth';

/**
 * Componente ProtectedRoute.
 *
 * Este componente protege uma rota, redirecionando para a página de login se o usuário não estiver autenticado.
 *
 * @param {PropsWithChildren} children - Os componentes filhos.
 */
export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { authenticated, loading } = useAuth();

  if (!authenticated) {
    navigate('/login');
  }

  if (loading) return 'loading...';

  return children;
}
