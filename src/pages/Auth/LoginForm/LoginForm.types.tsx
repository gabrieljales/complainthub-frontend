import { loginRequest } from '../../../interfaces/api/requests/Auth';

/**
 * Define os campos do formulário de login.
 *
 * @typedef {Object} LoginFormFields
 *
 * @property {string} email - O email do usuário.
 * @property {string} password - A senha do usuário.
 */
export type LoginFormFields = loginRequest;
