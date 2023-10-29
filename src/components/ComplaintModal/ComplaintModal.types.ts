import { UseMutateFunction } from '@tanstack/react-query';
import Complaint from '../../models/Complaint';
import {
  CreateComplaintRequest,
  UpdateComplaintRequest,
} from '../../interfaces/api/requests/Complaint';

export interface ComplaintModalProps {
  initialData?: Complaint;
  isSaveButtonLoading?: boolean;
  isOpen: boolean;
  onClose: () => void;
  onCreateComplaint?: UseMutateFunction<
    Complaint,
    Error,
    CreateComplaintRequest,
    unknown
  >;
  onUpdateComplaint?: UseMutateFunction<
    Complaint,
    Error,
    UpdateComplaintRequest,
    unknown
  >;
}
