import { ComplaintDTO } from '../interfaces/api/models/Complaint';
import { ComplaintStatus } from '../types/global/ComplaintStatus';

/**
 * Classe que representa um objeto de reclamação.
 */
class Complaint {
  createdAt!: string;

  description!: string;

  id!: string;

  status!: ComplaintStatus;

  title!: string;

  updatedAt!: string;

  constructor(data: Complaint) {
    Object.assign(this, { ...data });
  }

  /**
   * Método estático para criar uma nova instância de reclamação.
   *
   * @param {ComplaintDTO} data - Os dados da reclamação.
   * @returns {Complaint} Uma nova instância de reclamação.
   */
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
