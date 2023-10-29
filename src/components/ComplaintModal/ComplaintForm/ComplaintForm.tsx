import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ComplaintFormFields, ComplaintFormProps } from './ComplaintForm.types';
import { ComplaintFormFieldsEnum } from './ComplaintForm.enum';
import { complaintStatusLabels } from '../../../constants/complaintStatusLabels';
import ErrorMessage from '../../Form/ErrorMessage/ErrorMessage';
import { useAuth } from '../../../context/Auth';

function ComplaintForm({ isDisabled, initialData }: ComplaintFormProps) {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ComplaintFormFields>();

  const { loggedUser } = useAuth();

  const hasManagerRole = loggedUser?.type === 'manager';

  if (initialData)
    return (
      <>
        <FormControl>
          <FormLabel fontSize='lg'>Título</FormLabel>
          <Editable
            defaultValue={getValues(ComplaintFormFieldsEnum.TITLE)}
            fontSize='md'
            isDisabled={isDisabled}
          >
            <EditablePreview />
            <EditableInput
              {...register(ComplaintFormFieldsEnum.TITLE, {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
              maxLength={100}
              placeholder='Ex.: Celular quebrado'
            />
          </Editable>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel fontSize='lg'>Descrição</FormLabel>
          <Editable
            defaultValue={getValues(ComplaintFormFieldsEnum.DESCRIPTION)}
            fontSize='md'
            isDisabled={isDisabled}
          >
            <EditablePreview />
            <EditableTextarea
              {...register(ComplaintFormFieldsEnum.DESCRIPTION, {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
              maxH='xs'
              placeholder='Ex.: A tela do celular está quebrada'
              resize='vertical'
              fontSize='md'
              maxLength={1000}
            />
          </Editable>
        </FormControl>

        {hasManagerRole && (
          <FormControl mt={4}>
            <FormLabel fontSize='lg'>Status</FormLabel>
            <Select
              {...register(ComplaintFormFieldsEnum.STATUS, {
                required: { value: true, message: 'Este campo é obrigatório' },
              })}
              placeholder='Selecione...'
            >
              {Object.entries(complaintStatusLabels).map(([status, label]) => (
                <option key={status} value={status}>
                  {label}
                </option>
              ))}
            </Select>
          </FormControl>
        )}
      </>
    );

  return (
    <>
      <FormControl>
        <FormLabel fontSize='lg'>Título</FormLabel>
        <Input
          {...register(ComplaintFormFieldsEnum.TITLE, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.title}
          maxLength={100}
          placeholder='Ex.: Celular quebrado'
        />
        {errors.title && <ErrorMessage message={errors.title.message} />}
      </FormControl>

      <FormControl mt={4}>
        <FormLabel fontSize='lg'>Descrição</FormLabel>
        <Textarea
          {...register(ComplaintFormFieldsEnum.DESCRIPTION, {
            required: { value: true, message: 'Este campo é obrigatório' },
          })}
          isInvalid={!!errors.description}
          maxH='xs'
          placeholder='Ex.: A tela do celular está quebrada'
          resize='vertical'
          fontSize='md'
          maxLength={1000}
        />
        {errors.title && <ErrorMessage message={errors.title.message} />}
      </FormControl>
    </>
  );
}

export default ComplaintForm;
