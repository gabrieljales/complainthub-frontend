import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { useAuth } from '../context/Auth';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  if (!authenticated) {
    navigate('/login');
  }

  return children;
}
