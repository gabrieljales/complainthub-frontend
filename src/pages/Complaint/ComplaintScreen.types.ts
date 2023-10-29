import { TagProps } from '@chakra-ui/react';
import { ComplaintStatus } from '../../types/global/ComplaintStatus';

/**
 * Define um registro de status de reclamação.
 *
 * @typedef {Object} ComplaintCardStatusRecord
 *
 * @property {string} status - O status da reclamação.
 * @property {TagProps['color']} statusColor - A cor do status da reclamação.
 */
export type ComplaintCardStatusRecord = Record<
  ComplaintStatus,
  {
    status: string;
    statusColor: TagProps['color'];
  }
>;
