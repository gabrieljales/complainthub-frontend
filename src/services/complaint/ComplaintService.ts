import { formatRequestUrl } from '../../helpers/api';
import { ComplaintDTO } from '../../interfaces/api/models/Complaint';
import { CreateComplaintRequest } from '../../interfaces/api/requests/Complaint';
import Complaint from '../../models/Complaint';
import {
  performDelete,
  performGet,
  performPatch,
  performPost,
} from '../api/apiRequests';

const urls = {
  complaints: '/complaints',
  complaintsWithId: '/complaints/:id',
};

export const ComplaintService = {
  fetchComplaints: async (): Promise<Complaint[]> => {
    const { data } = await performGet<ComplaintDTO[]>(urls.complaints);

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
  updateComplaint: async (payload: Partial<Complaint>): Promise<Complaint> => {
    const { data } = await performPatch<ComplaintDTO>(
      formatRequestUrl({
        baseUrl: urls.complaintsWithId,
        idKey: 'id',
        idValue: payload.id || '',
      })
    );

    const updatedComplaint = Complaint.create(data);

    return updatedComplaint;
  },
  deleteComplaints: async (id: string): Promise<unknown> => {
    const { data } = await performDelete(
      formatRequestUrl({
        baseUrl: urls.complaintsWithId,
        idKey: 'id',
        idValue: id,
      })
    );

    return data;
  },
};
