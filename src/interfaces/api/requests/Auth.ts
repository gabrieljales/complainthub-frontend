import { AuthUser } from '../models/Auth';

/**
 * Define a estrutura dos dados de autenticação.
 *
 * @typedef {Object} AuthRecord
 *
 * @property {AuthUser} user - Os dados do usuário.
 * @property {string} token - O token de autenticação.
 */
export interface AuthRecord {
  user: AuthUser;
  token: string;
}

/**
 * Define a estrutura dos dados para uma requisição de login.
 *
 * @typedef {Object} loginRequest
 *
 * @property {string} email - O email do usuário.
 * @property {string} password - A senha do usuário.
 */
export interface loginRequest {
  email: string;
  password: string;
}
