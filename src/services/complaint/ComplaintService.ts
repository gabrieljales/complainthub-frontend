import { formatRequestUrl } from '../../helpers/api';
import { ComplaintDTO } from '../../interfaces/api/models/Complaint';
import {
  CreateComplaintRequest,
  UpdateComplaintRequest,
} from '../../interfaces/api/requests/Complaint';
import Complaint from '../../models/Complaint';
import { UserRole } from '../../types/global/UserRole';
import {
  performDelete,
  performGet,
  performPatch,
  performPost,
} from '../api/apiRequests';

const urls = {
  complaints: '/complaints',
  complaintsWithId: '/complaints/:id',
  userComplaints: '/users/complaints',
};

/**
 * Serviço de reclamações.
 *
 * @typedef {Object} ComplaintService
 *
 * @property {Function} fetchComplaints - Função para buscar todas as reclamações.
 * @property {Function} fetchUserComplaints - Função para buscar as reclamações de um usuário.
 * @property {Function} createComplaint - Função para criar uma nova reclamação.
 * @property {Function} updateComplaint - Função para atualizar uma reclamação existente.
 * @property {Function} deleteComplaint - Função para deletar uma reclamação.
 */
export const ComplaintService = {
  fetchComplaints: async (): Promise<Complaint[]> => {
    const { data } = await performGet<ComplaintDTO[]>(urls.complaints);

    const complaints = data.map((complaint) => Complaint.create(complaint));

    return complaints;
  },
  fetchUserComplaints: async (): Promise<Complaint[]> => {
    const { data } = await performGet<ComplaintDTO[]>(urls.userComplaints);

    const complaints = data.map((complaint) => Complaint.create(complaint));

    return complaints;
  },
  createComplaint: async (
    payload: CreateComplaintRequest
  ): Promise<Complaint> => {
    const { data } = await performPost<ComplaintDTO>(urls.complaints, payload);

    const createdComplaint = Complaint.create(data);

    return createdComplaint;
  },
  updateComplaint: async (
    payload: UpdateComplaintRequest,
    userRole?: UserRole
  ): Promise<Complaint> => {
    const { id: complaintId, ...complaintPayload } = payload;
    const { description, status, title } = complaintPayload;
    const formattedPayload =
      userRole === 'manager' ? { status } : { description, title };

    const { data } = await performPatch<ComplaintDTO>(
      formatRequestUrl({
        baseUrl: urls.complaintsWithId,
        idKey: 'id',
        idValue: complaintId || '',
      }),
      formattedPayload
    );

    const updatedComplaint = Complaint.create(data);

    return updatedComplaint;
  },
  deleteComplaint: async (id?: string): Promise<unknown> => {
    const { data } = await performDelete(
      formatRequestUrl({
        baseUrl: urls.complaintsWithId,
        idKey: 'id',
        idValue: id || '0',
      })
    );

    return data;
  },
};
