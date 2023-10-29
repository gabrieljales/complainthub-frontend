import { Heading, Stack, Text } from '@chakra-ui/react';

/**
 * Componente ErrorPage.
 *
 * Este componente renderiza uma página de erro.
 */
export default function ErrorPage() {
  return (
    <Stack align='center' justifyContent='center' p='10'>
      <Heading>Oops!</Heading>
      <Text>Algo inesperado ocorreu!</Text>
    </Stack>
  );
}
