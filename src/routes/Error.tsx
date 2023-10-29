import { Heading, Stack, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  return (
    <Stack align='center' justifyContent='center' p='10'>
      <Heading>Oops!</Heading>
      <Text>Algo inesperado ocorreu!</Text>
    </Stack>
  );
}
