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

/**
 * Componente ComplaintModal.
 *
 * Este componente renderiza um modal para criar ou atualizar uma reclamação.
 *
 * @param {ComplaintModalProps} props As propriedades do componente.
 * @param {Complaint} [props.initialData] Os dados iniciais da reclamação.
 * @param {boolean} props.isOpen Se o modal está aberto.
 * @param {boolean} [props.isSaveButtonLoading] Se o botão de salvar está carregando.
 * @param {() => void} props.onClose A função a ser chamada quando o modal é fechado.
 * @param {(data: CreateComplaintRequest, options?: UseMutateFunction) => void} [props.onCreateComplaint] A função a ser chamada quando uma nova reclamação é criada.
 * @param {(data: UpdateComplaintRequest, options?: UseMutateFunction) => void} [props.onUpdateComplaint] A função a ser chamada quando uma reclamação existente é atualizada.
 */
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
