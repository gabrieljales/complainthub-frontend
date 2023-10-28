import { useMutation, useQuery } from '@tanstack/react-query';
import { ComplaintService } from '../../../services/complaint/ComplaintService';
import Complaint from '../../../models/Complaint';
import {
  CreateComplaintRequest,
  UpdateComplaintRequest,
} from '../../../interfaces/api/requests/Complaint';

const { fetchComplaints, createComplaint, updateComplaint, deleteComplaint } =
  ComplaintService;

export const COMPLAINT_KEYS = {
  complaints: 'complaints',
};

export const useGetComplaints = () =>
  useQuery<Complaint[]>({
    queryFn: fetchComplaints,
    queryKey: [COMPLAINT_KEYS.complaints],
  });

export const useCreateComplaint = () =>
  useMutation<Complaint, Error, CreateComplaintRequest>({
    mutationFn: (payload) => createComplaint(payload),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

export const useUpdateComplaint = () =>
  useMutation<Complaint, Error, UpdateComplaintRequest>({
    mutationFn: (payload) => updateComplaint(payload),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

export const useDeleteComplaint = () =>
  useMutation<unknown, Error, string>({
    mutationFn: (id) => deleteComplaint(id),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });
