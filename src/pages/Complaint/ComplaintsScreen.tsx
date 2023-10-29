import {
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import CustomCard from '../../components/ComplaintCard/ComplaintCard';
import {
  COMPLAINT_KEYS,
  useCreateComplaint,
  useDeleteComplaint,
  useGetComplaints,
  useUpdateComplaint,
} from '../../hooks/api/Complaint/ComplaintHooks';
import ComplaintModal from '../../components/ComplaintModal/ComplaintModal';
import Complaint from '../../models/Complaint';
import { ComplaintCardStatusRecord } from './ComplaintScreen.types';
import { complaintStatusLabels } from '../../constants/complaintStatusLabels';
import { useAuth } from '../../context/Auth';

function ComplaintScreen() {
  const queryClient = useQueryClient();
  const toast = useToast({ position: 'top' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loggedUser } = useAuth();

  const hasClientRole = loggedUser?.type === 'client';

  const [selectedComplaint, setSelectedComplaint] = useState<
    Complaint | undefined
  >(undefined);

  const { data: complaints, isFetching: isFetchingComplaints } =
    useGetComplaints(loggedUser?.type);

  const { mutate: onCreateComplaint, isPending: isCreateComplaintPending } =
    useCreateComplaint();

  const { mutate: onUpdateComplaint, isPending: isUpdateComplaintPending } =
    useUpdateComplaint(loggedUser?.type);

  const { mutate: onDeleteComplaint } = useDeleteComplaint();

  const isSalveButtonPending =
    isCreateComplaintPending || isUpdateComplaintPending;

  const onComplaintCardDelete = (complaint: Complaint) => {
    onDeleteComplaint(complaint.id, {
      onError: () => {
        toast({
          duration: 5000,
          status: 'error',
          title: 'Ocorreu um erro durante a remoção.',
        });
      },
      onSuccess: () => {
        toast({
          duration: 4000,
          isClosable: true,
          status: 'success',
          title: 'Reclamação removida com sucesso.',
        });

        queryClient.invalidateQueries({
          queryKey: [COMPLAINT_KEYS.complaints],
        });
      },
    });
  };

  const onComplaintCardUpdate = (complaint: Complaint) => {
    setSelectedComplaint(complaint);
    onOpen();
  };

  const renderContent = () => {
    if (isFetchingComplaints)
      return (
        <Flex width='full' justifyContent='center'>
          <Spinner />
        </Flex>
      );

    if (!complaints?.length) {
      return <Text>Nenhum item encontrado.</Text>;
    }

    return complaints?.map((complaint) => {
      const statusRecord: ComplaintCardStatusRecord = {
        pending: {
          status: complaintStatusLabels.pending,
          statusColor: 'yellow.500',
        },
        solved: {
          status: complaintStatusLabels.solved,
          statusColor: 'green.500',
        },
        unsolved: {
          status: complaintStatusLabels.unsolved,
          statusColor: 'red.500',
        },
      };

      return (
        <CustomCard
          key={complaint.id}
          description={complaint.description}
          onDelete={() => onComplaintCardDelete(complaint)}
          onEdit={() => onComplaintCardUpdate(complaint)}
          status={statusRecord[complaint.status].status}
          statusColor={statusRecord[complaint.status].statusColor}
          title={complaint.title}
        />
      );
    });
  };

  if (isOpen) {
    return (
      <ComplaintModal
        isOpen={isOpen}
        isSaveButtonLoading={isSalveButtonPending}
        initialData={selectedComplaint}
        onClose={() => {
          onClose();
          setSelectedComplaint(undefined);
        }}
        onCreateComplaint={onCreateComplaint}
        onUpdateComplaint={onUpdateComplaint}
      />
    );
  }

  return (
    <Stack width='full'>
      <Flex justify='space-between'>
        <Heading>Reclamações</Heading>
        {hasClientRole && (
          <Button colorScheme='blue' onClick={onOpen}>
            Adicionar
          </Button>
        )}
      </Flex>
      <Flex wrap='wrap' gap='5' marginTop='10'>
        {renderContent()}
      </Flex>
    </Stack>
  );
}

export default ComplaintScreen;
