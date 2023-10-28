import { ComplaintStatus } from '../types/global/ComplaintStatus';

type ComplaintStatusLabel = Record<ComplaintStatus, string>;

export const complaintStatusLabels: ComplaintStatusLabel = {
  pending: 'Em resolução',
  solved: 'Resolvida',
  unsolved: 'Não resolvida',
};
