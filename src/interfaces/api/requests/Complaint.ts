import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

interface abstractComplaintRecord {
  description: string;
  id: string;
  status: ComplaintStatus;
  title: string;
}

export interface CreateComplaintRequest
  extends Omit<abstractComplaintRecord, 'id'> {}

export interface UpdateComplaintRequest
  extends Partial<abstractComplaintRecord> {}
