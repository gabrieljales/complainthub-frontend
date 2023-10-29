import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import { LoginFormFields } from './LoginForm/LoginForm.types';
import { useAuth } from '../../context/Auth';

/**
 * Componente LoginScreen.
 *
 * Este componente renderiza uma tela de login com um formulário de login e botões para esquecer a senha e criar uma conta.
 */
function LoginScreen() {
  const navigate = useNavigate();
  const toast = useToast({ position: 'top' });
  const methods = useForm<LoginFormFields>();

  const { handleSubmit } = methods;

  const { useLogin, handleLogin } = useAuth();

  const { mutate: onLogin, isPending: isLoginPending } = useLogin(handleLogin);

  const onSubmit = (data: LoginFormFields) => {
    onLogin(data, {
      onError: () => {
        toast({
          duration: 5000,
          status: 'error',
          title: 'Ocorreu um erro na autenticação.',
        });
      },
      onSuccess: () => {
        navigate('/complaints');
      },
    });
  };

  const renderContent = () => (
    <FormProvider {...methods}>
      <Stack w='full'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginForm />
          <Button
            colorScheme='blue'
            isLoading={isLoginPending}
            marginTop='5'
            type='submit'
            width='full'
          >
            Entrar
          </Button>
        </form>
      </Stack>
    </FormProvider>
  );
  return (
    <Flex width='full' justifyContent='center' alignItems='center'>
      <Stack w='xs'>
        <Flex>{renderContent()}</Flex>
        <Button as={NavLink} to='/' variant='link' width='fit-content'>
          Esqueci a senha
        </Button>
        <Button as={NavLink} to='/register' variant='link' width='fit-content'>
          Ainda não tem conta?
        </Button>
      </Stack>
    </Flex>
  );
}

export default LoginScreen;
