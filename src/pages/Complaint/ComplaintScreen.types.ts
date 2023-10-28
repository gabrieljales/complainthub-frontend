import { TagProps } from '@chakra-ui/react';
import { ComplaintStatus } from '../../types/global/ComplaintStatus';

export type ComplaintCardStatusRecord = Record<
  ComplaintStatus,
  {
    status: string;
    statusColor: TagProps['color'];
  }
>;
