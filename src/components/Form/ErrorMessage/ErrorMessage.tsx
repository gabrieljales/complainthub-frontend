import { Text } from '@chakra-ui/react';
import { ErrorMessageProps } from './ErrorMessage.types';

/**
 * Componente ErrorMessage.
 *
 * Este componente renderiza uma mensagem de erro.
 *
 * @param {ErrorMessageProps} props As propriedades do componente.
 * @param {string} [props.message] A mensagem de erro a ser exibida.
 */
function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Text fontSize='md' color='red'>
      {message}
    </Text>
  );
}

export default ErrorMessage;
