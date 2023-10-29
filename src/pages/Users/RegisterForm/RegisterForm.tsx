import { Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { RegisterFormFields } from './RegisterForm.types';
import { RegisterFormFieldsEnum } from './RegisterForm.enum';
import ErrorMessage from '../../../components/Form/ErrorMessage/ErrorMessage';

function RegisterForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormFields>();

  return (
    <Stack>
      <Flex gap='4'>
        <FormControl>
          <FormLabel fontSize='lg'>Nome</FormLabel>
          <Input
            {...register(RegisterFormFieldsEnum.NAME, {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            isInvalid={!!errors.name}
            maxLength={25}
            placeholder='Ex.: João Pedro'
            type='text'
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </FormControl>

        <FormControl>
          <FormLabel fontSize='lg'>Sobrenome</FormLabel>
          <Input
            {...register(RegisterFormFieldsEnum.LAST_NAME, {
              required: { value: true, message: 'Este campo é obrigatório' },
            })}
            isInvalid={!!errors.last_name}
            maxLength={45}
            placeholder='Ex.: Silva'
            type='text'
          />
          {errors.last_name && (
            <ErrorMessage message={errors.last_name.message} />
          )}
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel fontSize='lg'>Email</FormLabel>
        <Input
          {...register(RegisterFormFieldsEnum.EMAIL, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.email}
          placeholder='username@email.com'
          type='email'
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </FormControl>

      <FormControl>
        <FormLabel fontSize='lg'>Senha</FormLabel>
        <Input
          {...register(RegisterFormFieldsEnum.PASSWORD, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.password}
          fontSize='md'
          type='password'
        />
        {errors.password && <ErrorMessage message={errors.password?.message} />}
      </FormControl>
    </Stack>
  );
}

export default RegisterForm;
