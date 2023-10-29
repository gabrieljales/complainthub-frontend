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

/**
 * Componente CustomCard.
 *
 * Este componente renderiza um cartão com um título, descrição e botões de ação.
 *
 * @param {ComplaintCardProps} props As propriedades do componente.
 * @param {string} props.description A descrição da reclamação.
 * @param {() => void} [props.onDelete] A função a ser chamada quando o botão de exclusão é clicado.
 * @param {() => void} [props.onEdit] A função a ser chamada quando o botão de edição é clicado.
 * @param {string} [props.status] O status da reclamação.
 * @param {TagProps['color']} [props.statusColor] A cor do status da reclamação.
 * @param {string} props.title O título da reclamação.
 */
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
