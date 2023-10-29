import { ComplaintStatus } from '../../../types/global/ComplaintStatus';

/**
 * Define a estrutura dos dados de uma reclamação.
 *
 * @typedef {Object} ComplaintDTO
 *
 * @property {string} created_at - A data de criação da reclamação.
 * @property {string} description - A descrição da reclamação.
 * @property {string} id - O ID da reclamação.
 * @property {ComplaintStatus} status - O status da reclamação.
 * @property {string} title - O título da reclamação.
 * @property {string} updated_at - A data de atualização da reclamação.
 */
export interface ComplaintDTO {
  created_at: string;
  description: string;
  id: string;
  status: ComplaintStatus;
  title: string;
  updated_at: string;
}
