import { Text } from '@chakra-ui/react';
import { ErrorMessageProps } from './ErrorMessage.types';

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Text fontSize='md' color='red'>
      {message}
    </Text>
  );
}

export default ErrorMessage;
