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
import { EditIcon } from '@chakra-ui/icons';
import { CustomCardProps } from './Card.types';

function CustomCard({ description, title, status }: CustomCardProps) {
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
          <Flex width='fit-content'>
            {status && <Tag>{status}</Tag>}
            <IconButton
              aria-label='edit-complaint'
              icon={<EditIcon />}
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
