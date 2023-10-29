import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

interface abstractComplaintRecord {
  description: string;
  id: string;
  status: ComplaintStatus;
  title: string;
}

/**
 * Define a estrutura dos dados para criar uma reclamação.
 *
 * @typedef CreateComplaintRequest
 *
 * Omite o campo 'id' da estrutura abstrata de uma reclamação.
 */
export interface CreateComplaintRequest
  extends Omit<abstractComplaintRecord, 'id'> {}

/**
 * Define a estrutura dos dados para atualizar uma reclamação.
 *
 * Permite que todos os campos da estrutura abstrata de uma reclamação sejam opcionais.
 */
export interface UpdateComplaintRequest
  extends Partial<abstractComplaintRecord> {}
