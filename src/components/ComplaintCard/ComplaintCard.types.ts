import { TagProps } from '@chakra-ui/react';

/**
 * Propriedades do componente ComplaintCard.
 *
 * @typedef {Object} ComplaintCardProps
 *
 * @property {string} description - A descrição da reclamação.
 * @property {() => void} [onDelete] - A função a ser chamada quando o botão de exclusão é clicado.
 * @property {() => void} [onEdit] - A função a ser chamada quando o botão de edição é clicado.
 * @property {string} [status] - O status da reclamação.
 * @property {TagProps['color']} [statusColor] - A cor do status da reclamação.
 * @property {string} title - O título da reclamação.
 */
export interface ComplaintCardProps {
  description: string;
  onDelete?: () => void;
  onEdit?: () => void;
  status?: string;
  statusColor?: TagProps['color'];
  title: string;
}
