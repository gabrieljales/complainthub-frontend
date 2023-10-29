import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { useAuth } from '../context/Auth';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { authenticated, loading } = useAuth();

  if (!authenticated) {
    navigate('/login');
  }

  if (loading) {
    return (
      <Flex
        alignItems='center'
        height='full'
        justifyContent='center'
        width='full'
      >
        <Spinner />
      </Flex>
    );
  }

  return children;
}
