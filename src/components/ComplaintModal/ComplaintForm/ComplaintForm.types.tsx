import Complaint from '../../../models/Complaint';

/**
 * Define os campos do formulário de reclamação.
 *
 * @typedef {Object} ComplaintFormFields
 *
 * @property {string} description - A descrição da reclamação.
 * @property {string} status - O status da reclamação.
 * @property {string} title - O título da reclamação.
 */
export type ComplaintFormFields = Pick<
  Complaint,
  'description' | 'status' | 'title'
>;

/**
 * Propriedades do componente ComplaintForm.
 *
 * @typedef {Object} ComplaintFormProps
 *
 * @property {boolean} [isDisabled] - Se o formulário está desabilitado.
 * @property {Complaint} [initialData] - Os dados iniciais da reclamação.
 */
export interface ComplaintFormProps {
  isDisabled?: boolean;
  initialData?: Complaint;
}
