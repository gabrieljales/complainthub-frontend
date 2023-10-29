import { Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import Navbar from '../components/Navbar/Navbar';

export default function Root() {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return (
      <Flex overflow='hidden' height='90vh'>
        <Outlet />
      </Flex>
    );
  }

  return (
    <Stack gap='xs'>
      <Navbar />
      <Flex margin='6' minH='90vh'>
        <Outlet />
      </Flex>
    </Stack>
  );
}
