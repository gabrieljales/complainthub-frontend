interface abstractComplaintRecord {
  id: string;
  title: string;
  description: string;
}
export interface CreateComplaintRequest
  extends Omit<abstractComplaintRecord, 'id'> {}

export interface UpdateComplaintRequest
  extends Partial<abstractComplaintRecord> {}
