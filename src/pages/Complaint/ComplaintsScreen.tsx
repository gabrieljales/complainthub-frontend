import { Button, Flex, Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import CustomCard from '../../components/Card/Card';
import { useGetComplaints } from '../../hooks/api/Complaint/ComplaintHooks';

function ComplaintScreen() {
  const { data: complaints, isFetching: isFetchingComplaints } =
    useGetComplaints();

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

    return complaints?.map((complaint) => (
      <CustomCard description={complaint.description} title={complaint.title} />
    ));
  };

  return (
    <Stack width='full'>
      <Flex justify='space-between'>
        <Heading>Reclamações</Heading>
        <Button colorScheme='blue'>Adicionar</Button>
      </Flex>
      <Flex wrap='wrap' gap='5' marginTop='10'>
        {renderContent()}
      </Flex>
    </Stack>
  );
}

export default ComplaintScreen;
