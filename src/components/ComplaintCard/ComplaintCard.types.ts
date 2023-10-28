import { TagProps } from '@chakra-ui/react';

export interface ComplaintCardProps {
  description: string;
  onDelete?: () => void;
  onEdit?: () => void;
  status?: string;
  statusColor?: TagProps['color'];
  title: string;
}
