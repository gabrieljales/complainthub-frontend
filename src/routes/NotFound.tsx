import { Heading, Stack, Text } from '@chakra-ui/react';

/**
 * Componente NotFoundPage.
 *
 * Este componente renderiza uma página de erro 404 quando uma rota não é encontrada.
 */
export default function NotFoundPage() {
  return (
    <Stack align='center' justifyContent='center' p='10'>
      <Heading>404!</Heading>
      <Text>Página não encontrada.</Text>
    </Stack>
  );
}
