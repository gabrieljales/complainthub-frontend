import { Heading, Stack, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
  return (
    <Stack align='center' justifyContent='center' p='10'>
      <Heading>404!</Heading>
      <Text>Página não encontrada.</Text>
    </Stack>
  );
}
