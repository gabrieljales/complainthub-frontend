import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

interface abstractComplaintRecord {
  id: string;
  title: string;
  description: string;
  status: ComplaintStatus;
}
export interface CreateComplaintRequest
  extends Omit<abstractComplaintRecord, 'id'> {}

export interface UpdateComplaintRequest
  extends Partial<abstractComplaintRecord> {}
