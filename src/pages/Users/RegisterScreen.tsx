import { Button, Flex, Stack, useToast } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';
import { RegisterFormFields } from './RegisterForm/RegisterForm.types';
import { useRegisterUser } from '../../hooks/api/User/UserHooks';

function RegisterScreen() {
  const navigate = useNavigate();
  const toast = useToast({ position: 'top' });
  const methods = useForm<RegisterFormFields>();

  const { handleSubmit } = methods;

  const { mutate: onRegister, isPending: isRegisterPending } =
    useRegisterUser();

  const onSubmit = (data: RegisterFormFields) => {
    onRegister(data, {
      onError: () => {
        toast({
          duration: 5000,
          status: 'error',
          title: 'Ocorreu um erro no registro.',
        });
      },
      onSuccess: () => {
        toast({
          duration: 4000,
          isClosable: true,
          status: 'success',
          title: 'Usuário cadastrado com sucesso.',
        });
        navigate('/login');
      },
    });
  };

  const renderContent = () => (
    <FormProvider {...methods}>
      <Stack w='full'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RegisterForm />
          <Button
            colorScheme='blue'
            isLoading={isRegisterPending}
            marginTop='5'
            type='submit'
            width='full'
          >
            Registrar
          </Button>
        </form>
      </Stack>
    </FormProvider>
  );
  return (
    <Flex width='full' justifyContent='center' alignItems='center'>
      <Stack w='xs'>
        <Flex>{renderContent()}</Flex>
        <Button as={NavLink} to='/login' variant='link' width='fit-content'>
          Já possui uma conta?
        </Button>
      </Stack>
    </Flex>
  );
}

export default RegisterScreen;
