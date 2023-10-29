import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { LoginFormFields } from './LoginForm.types';
import { LoginFormFieldsEnum } from './LoginForm.enum';
import ErrorMessage from '../../../components/Form/ErrorMessage/ErrorMessage';

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormFields>();

  return (
    <>
      <FormControl>
        <FormLabel fontSize='lg'>Email</FormLabel>
        <Input
          {...register(LoginFormFieldsEnum.EMAIL, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.email}
          placeholder='username@email.com'
          type='email'
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </FormControl>

      <FormControl mt={4}>
        <FormLabel fontSize='lg'>Senha</FormLabel>
        <Input
          {...register(LoginFormFieldsEnum.PASSWORD, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.password}
          fontSize='md'
          type='password'
        />
        {errors.password && <ErrorMessage message={errors.password?.message} />}
      </FormControl>
    </>
  );
}

export default LoginForm;
