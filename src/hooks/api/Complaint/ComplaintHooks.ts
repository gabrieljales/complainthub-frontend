import { useMutation, useQuery } from '@tanstack/react-query';
import { ComplaintService } from '../../../services/complaint/ComplaintService';
import Complaint from '../../../models/Complaint';
import {
  CreateComplaintRequest,
  UpdateComplaintRequest,
} from '../../../interfaces/api/requests/Complaint';
import { UserRole } from '../../../types/global/UserRole';

const {
  createComplaint,
  deleteComplaint,
  fetchComplaints,
  fetchUserComplaints,
  updateComplaint,
} = ComplaintService;

export const COMPLAINT_KEYS = {
  complaints: 'complaints',
};

export const useGetComplaints = (userRole?: UserRole) =>
  useQuery<Complaint[]>({
    queryFn: () => fetchComplaints(),
    queryKey: [COMPLAINT_KEYS.complaints],
    enabled: !!userRole && userRole === 'manager',
  });

export const useGetUserComplaints = (userRole?: UserRole) =>
  useQuery<Complaint[]>({
    queryFn: () => fetchUserComplaints(),
    queryKey: [COMPLAINT_KEYS.complaints],
    enabled: !!userRole && userRole === 'client',
  });

export const useCreateComplaint = () =>
  useMutation<Complaint, Error, CreateComplaintRequest>({
    mutationFn: (payload) => createComplaint(payload),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

export const useUpdateComplaint = (userRole?: UserRole) =>
  useMutation<Complaint, Error, UpdateComplaintRequest>({
    mutationFn: (payload) => updateComplaint(payload, userRole),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

export const useDeleteComplaint = () =>
  useMutation<unknown, Error, string>({
    mutationFn: (id) => deleteComplaint(id),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });
