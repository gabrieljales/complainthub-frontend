import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Stack gap='xs' minH='100vh' width='full'>
      <Flex
        align='center'
        backgroundColor='blue.400'
        justify='space-between'
        paddingX='6'
        paddingY='4'
      >
        <Text fontSize='xl' as='b'>
          ComplaintHub
        </Text>
        <Button>Sair</Button>
      </Flex>
      <Flex margin='6' minH='90vh'>
        <Outlet />
      </Flex>
    </Stack>
  );
}
