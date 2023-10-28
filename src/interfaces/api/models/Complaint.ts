import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

export interface ComplaintDTO {
  id: string;
  title: string;
  description: string;
  status: ComplaintStatus;
  created_at: string;
  updated_at: string;
}
