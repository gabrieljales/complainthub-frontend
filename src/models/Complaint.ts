import { ComplaintDTO } from '../interfaces/api/models/Complaint';

class Complaint {
  createdAt!: string;

  description!: string;

  id!: string;

  status!: string;

  title!: string;

  updatedAt!: string;

  constructor(data: Complaint) {
    Object.assign(this, { ...data });
  }

  static create(data: ComplaintDTO) {
    return new Complaint({
      createdAt: data?.created_at,
      description: data?.description,
      id: data?.id,
      status: data?.status,
      title: data?.title,
      updatedAt: data?.updated_at,
    });
  }
}

export default Complaint;
