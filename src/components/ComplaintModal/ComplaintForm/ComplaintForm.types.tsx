import Complaint from '../../../models/Complaint';

export type ComplaintFormFields = Pick<
  Complaint,
  'description' | 'status' | 'title'
>;

export interface ComplaintFormProps {
  isDisabled?: boolean;
  initialData?: Complaint;
}
