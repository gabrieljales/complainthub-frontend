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

/**
 * Hook para obter as reclamações.
 *
 * @param {UserRole} [userRole] O papel do usuário.
 *
 * @returns {UseQueryResult<Complaint[]>} O resultado da consulta do React Query.
 */
export const useGetComplaints = (userRole?: UserRole) =>
  useQuery<Complaint[]>({
    queryFn: () => fetchComplaints(),
    queryKey: [COMPLAINT_KEYS.complaints],
    enabled: !!userRole && userRole === 'manager',
  });

/**
 * Hook para obter as reclamações do usuário.
 *
 * @param {UserRole} [userRole] O papel do usuário.
 *
 * @returns {UseQueryResult<Complaint[]>} O resultado da consulta do React Query.
 */
export const useGetUserComplaints = (userRole?: UserRole) =>
  useQuery<Complaint[]>({
    queryFn: () => fetchUserComplaints(),
    queryKey: [COMPLAINT_KEYS.complaints],
    enabled: !!userRole && userRole === 'client',
  });

/**
 * Hook para criar uma reclamação.
 *
 * @returns {UseMutationResult<Complaint, Error, CreateComplaintRequest>} O resultado da mutação do React Query.
 */
export const useCreateComplaint = () =>
  useMutation<Complaint, Error, CreateComplaintRequest>({
    mutationFn: (payload) => createComplaint(payload),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

/**
 * Hook para atualizar uma reclamação.
 *
 * @param {UserRole} [userRole] O papel do usuário.
 *
 * @returns {UseMutationResult<Complaint, Error, UpdateComplaintRequest>} O resultado da mutação do React Query.
 */
export const useUpdateComplaint = (userRole?: UserRole) =>
  useMutation<Complaint, Error, UpdateComplaintRequest>({
    mutationFn: (payload) => updateComplaint(payload, userRole),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });

/**
 * Hook para deletar uma reclamação.
 *
 * @returns {UseMutationResult<unknown, Error, string>} O resultado da mutação do React Query.
 */
export const useDeleteComplaint = () =>
  useMutation<unknown, Error, string>({
    mutationFn: (id) => deleteComplaint(id),
    mutationKey: [COMPLAINT_KEYS.complaints],
  });
