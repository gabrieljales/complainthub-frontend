import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

export interface ComplaintDTO {
  created_at: string;
  description: string;
  id: string;
  status: ComplaintStatus;
  title: string;
  updated_at: string;
}
