import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAuth } from '../context/Auth';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { authenticated, loading } = useAuth();

  if (!authenticated) {
    navigate('/login');
  }

  if (loading) return 'loading...';

  return children;
}
