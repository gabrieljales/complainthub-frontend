import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ComplaintFormFields, ComplaintFormProps } from './ComplaintForm.types';
import { ComplaintFormFieldsEnum } from './ComplaintForm.enum';

function ComplaintForm({ isDisabled, initialData }: ComplaintFormProps) {
  const { register, getValues } = useFormContext<ComplaintFormFields>();

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
                required: true,
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
                required: true,
              })}
              maxH='xs'
              placeholder='Ex.: A tela do celular está quebrada'
              resize='vertical'
              fontSize='md'
              maxLength={1000}
            />
          </Editable>
        </FormControl>
      </>
    );

  return (
    <>
      <FormControl>
        <FormLabel fontSize='lg'>Título</FormLabel>
        <Input
          {...register(ComplaintFormFieldsEnum.TITLE, {
            required: true,
          })}
          maxLength={100}
          placeholder='Ex.: Celular quebrado'
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel fontSize='lg'>Descrição</FormLabel>
        <Textarea
          {...register(ComplaintFormFieldsEnum.DESCRIPTION, {
            required: true,
          })}
          maxH='xs'
          placeholder='Ex.: A tela do celular está quebrada'
          resize='vertical'
          fontSize='md'
          maxLength={1000}
        />
      </FormControl>
    </>
  );
}

export default ComplaintForm;
