import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Tag,
  Text,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { ComplaintCardProps } from './ComplaintCard.types';

function CustomCard({
  description,
  onDelete,
  onEdit,
  status,
  statusColor,
  title,
}: ComplaintCardProps) {
  return (
    <Card width='96'>
      <CardHeader>
        <Flex flexWrap='nowrap' justifyContent='space-between'>
          <Heading
            as='span'
            overflow='hidden'
            size='md'
            textAlign='left'
            textOverflow='ellipsis'
          >
            {title}
          </Heading>
          <Flex marginLeft='2' width='fit-content' alignItems='center' gap='1'>
            {status && (
              <Tag
                whiteSpace='nowrap'
                height='max-content'
                color='white'
                bg={statusColor}
                fontWeight='bold'
              >
                {status}
              </Tag>
            )}
            <IconButton
              aria-label='Editar reclamação'
              icon={<EditIcon />}
              colorScheme='telegram'
              onClick={onEdit}
              variant='link'
            />
            <IconButton
              aria-label='Editar reclamação'
              icon={<DeleteIcon />}
              colorScheme='red'
              onClick={onDelete}
              variant='link'
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody paddingX='5'>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
