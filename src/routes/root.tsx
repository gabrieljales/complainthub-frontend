import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Stack minH='100vh' width='full'>
      <Flex
        align='center'
        backgroundColor='blue.400'
        justify='space-between'
        padding='4'
        paddingX='6'
      >
        <Text as='b'>ComplaintHub</Text>
        <Button>Sair</Button>
      </Flex>
      <Flex marginX='6' minH='90vh'>
        <Outlet />
      </Flex>
    </Stack>
  );
}
