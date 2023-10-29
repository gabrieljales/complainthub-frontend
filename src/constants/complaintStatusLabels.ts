import { ComplaintStatus } from '../types/global/ComplaintStatus';

type ComplaintStatusLabel = Record<ComplaintStatus, string>;

/**
 * Define os rótulos de status de reclamação.
 *
 * @typedef {Object} ComplaintStatusLabel
 *
 * @property {string} pending - O rótulo para o status 'pending'.
 * @property {string} solved - O rótulo para o status 'solved'.
 * @property {string} unsolved - O rótulo para o status 'unsolved'.
 */
export const complaintStatusLabels: ComplaintStatusLabel = {
  pending: 'Em resolução',
  solved: 'Resolvida',
  unsolved: 'Não resolvida',
};
