import { UserRole } from '../../../types/global/UserRole';

/**
 * Define a estrutura dos dados de um usuário.
 *
 * @typedef {Object} UserDTO
 *
 * @property {string} created_at - A data de criação do usuário.
 * @property {string} email - O email do usuário.
 * @property {string} id - O ID do usuário.
 * @property {string} last_name - O sobrenome do usuário.
 * @property {string} name - O nome do usuário.
 * @property {string} password - A senha do usuário.
 * @property {UserRole} type - O papel do usuário.
 * @property {string} updated_at - A data de atualização do usuário.
 */
export interface UserDTO {
  created_at: string;
  email: string;
  id: string;
  last_name: string;
  name: string;
  password: string;
  type: UserRole;
  updated_at: string;
}
