import { useQuery } from '@tanstack/react-query';
import { ComplaintService } from '../../../services/complaint/ComplaintService';
import Complaint from '../../../models/Complaint';

const { fetchComplaints } = ComplaintService;

const COMPLAINT_KEYS = {
  complaints: 'complaints',
};

export const useGetComplaints = () =>
  useQuery<Complaint[]>({
    queryFn: fetchComplaints,
    queryKey: [COMPLAINT_KEYS.complaints],
  });
