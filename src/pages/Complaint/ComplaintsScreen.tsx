import {
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import CustomCard from '../../components/ComplaintCard/ComplaintCard';
import {
  useCreateComplaint,
  useDeleteComplaint,
  useGetComplaints,
  useUpdateComplaint,
} from '../../hooks/api/Complaint/ComplaintHooks';
import ComplaintModal from '../../components/ComplaintModal/ComplaintModal';
import Complaint from '../../models/Complaint';
import { ComplaintCardStatusRecord } from './ComplaintScreen.types';

function ComplaintScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedComplaint, setSelectedComplaint] = useState<
    Complaint | undefined
  >(undefined);

  const { data: complaints, isFetching: isFetchingComplaints } =
    useGetComplaints();

  const { mutate: onCreateComplaint } = useCreateComplaint();

  const { mutate: onUpdateComplaint } = useUpdateComplaint(
    selectedComplaint?.id
  );

  // TODO: Use hook
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mutate: onDeleteComplaint } = useDeleteComplaint(
    selectedComplaint?.id
  );

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
        pending: { status: 'Em resolução', statusColor: 'yellow.500' },
        solved: { status: 'Resolvida', statusColor: 'green.500' },
        unsolved: { status: 'Não resolvida', statusColor: 'red.500' },
      };

      return (
        <CustomCard
          description={complaint.description}
          // TODO: Add delete complaint
          onDelete={() => {}}
          onEdit={() => {
            setSelectedComplaint(complaint);
            onOpen();
          }}
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
        <Button colorScheme='blue' onClick={onOpen}>
          Adicionar
        </Button>
      </Flex>
      <Flex wrap='wrap' gap='5' marginTop='10'>
        {renderContent()}
      </Flex>
    </Stack>
  );
}

export default ComplaintScreen;
