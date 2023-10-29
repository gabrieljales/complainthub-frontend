import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ComplaintModalProps } from './ComplaintModal.types';
import { ComplaintFormFields } from './ComplaintForm/ComplaintForm.types';
import ComplaintForm from './ComplaintForm/ComplaintForm';
import { ComplaintFormFieldsEnum } from './ComplaintForm/ComplaintForm.enum';
import { COMPLAINT_KEYS } from '../../hooks/api/Complaint/ComplaintHooks';
import { useAuth } from '../../context/Auth';

function ComplaintModal({
  initialData,
  isOpen,
  isSaveButtonLoading,
  onClose,
  onCreateComplaint,
  onUpdateComplaint,
}: ComplaintModalProps) {
  const queryClient = useQueryClient();
  const { loggedUser } = useAuth();
  const toast = useToast({ position: 'top' });
  const methods = useForm<ComplaintFormFields>();
  const {
    handleSubmit,
    formState: { isValid },
    setValue,
  } = methods;

  const hasManagerRole = loggedUser?.type === 'manager';

  useEffect(() => {
    if (initialData) {
      Object.values(ComplaintFormFieldsEnum).forEach((formField) =>
        setValue(formField, initialData[formField])
      );
    }
  }, [initialData, setValue]);

  const onSubmit = (data: ComplaintFormFields) => {
    if (initialData) {
      onUpdateComplaint?.(
        { id: initialData.id, ...data },
        {
          onError: () => {
            toast({
              duration: 5000,
              status: 'error',
              title: 'Ocorreu um erro durante a atualização.',
            });
          },
          onSuccess: () => {
            toast({
              duration: 4000,
              isClosable: true,
              status: 'success',
              title: 'Reclamação atualizada com sucesso.',
            });

            queryClient.invalidateQueries({
              queryKey: [COMPLAINT_KEYS.complaints],
            });

            onClose();
          },
        }
      );
      return;
    }

    onCreateComplaint?.(data, {
      onError: () => {
        toast({
          duration: 5000,
          status: 'error',
          title: 'Ocorreu um erro durante a criação.',
        });
      },
      onSuccess: () => {
        toast({
          duration: 4000,
          isClosable: true,
          status: 'success',
          title: 'Reclamação criada com sucesso.',
        });

        queryClient.invalidateQueries({
          queryKey: [COMPLAINT_KEYS.complaints],
        });
      },
    });

    onClose();
  };

  const renderContent = () => (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody pb={6}>
          <ComplaintForm
            isDisabled={hasManagerRole}
            initialData={initialData}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            isDisabled={!isValid}
            isLoading={isSaveButtonLoading}
            mr={3}
            type='submit'
          >
            Salvar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </form>
    </FormProvider>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Abra sua reclamação</ModalHeader>
        <ModalCloseButton />
        {renderContent()}
      </ModalContent>
    </Modal>
  );
}

export default ComplaintModal;
