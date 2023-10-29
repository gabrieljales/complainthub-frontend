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

export const ComplaintService = {
  fetchComplaints: async (userRole?: UserRole): Promise<Complaint[]> => {
    const complaintsUrl =
      userRole === 'admin' ? urls.complaints : urls.userComplaints;

    const { data } = await performGet<ComplaintDTO[]>(complaintsUrl);

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
    payload: UpdateComplaintRequest
  ): Promise<Complaint> => {
    const { data } = await performPatch<ComplaintDTO>(
      formatRequestUrl({
        baseUrl: urls.complaintsWithId,
        idKey: 'id',
        idValue: payload?.id || '',
      })
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
