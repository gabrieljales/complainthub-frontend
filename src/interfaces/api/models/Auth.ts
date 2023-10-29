import User from '../../../models/User';

/**
 * Define os campos do usuário para autenticação.
 *
 * @typedef {Object} AuthUser
 *
 * @property {string} email - O email do usuário.
 * @property {string} name - O nome do usuário.
 */
export type AuthUser = Pick<User, 'email' | 'name'>;

/**
 * Define os campos do usuário para autenticação com o papel do usuário.
 *
 * @typedef {Object} AuthUserWithRole
 *
 * @property {string} email - O email do usuário.
 * @property {string} name - O nome do usuário.
 * @property {string} type - O papel do usuário.
 */
export type AuthUserWithRole = Pick<User, 'email' | 'name' | 'type'>;

/**
 * Define a estrutura dos dados de autenticação.
 *
 * @typedef {Object} AuthDTO
 *
 * @property {string} created_at - A data de criação da autenticação.
 * @property {string} email - O email do usuário.
 * @property {string} token - O token de autenticação.
 * @property {string} password - A senha do usuário.
 * @property {AuthUser} user - Os dados do usuário.
 * @property {string} updated_at - A data de atualização da autenticação.
 */
export interface AuthDTO {
  created_at: string;
  email: string;
  token: string;
  password: string;
  user: AuthUser;
  updated_at: string;
}

/**
 * Define a estrutura dos dados de login.
 *
 * @typedef {Object} LoginDTO
 *
 * @property {AuthUser} user - Os dados do usuário.
 * @property {string} token - O token de autenticação.
 */
export interface LoginDTO extends Pick<AuthDTO, 'user' | 'token'> {}
