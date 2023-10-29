import { PropsWithChildren } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { useAuth } from '../context/Auth';

export default function UnprotectedRoute({ children }: PropsWithChildren) {
  const { loading } = useAuth();

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
