import { loginRequest } from '../../interfaces/api/requests/Auth';
import Auth from '../../models/Auth';
import { performPost } from '../api/apiRequests';

const urls = {
  authenticate: '/authenticate',
};

/**
 * Serviço de autenticação.
 *
 * @typedef {Object} AuthService
 *
 * @property {Function} login - Função para realizar o login.
 */
export const AuthService = {
  /**
   * Realiza o login.
   *
   * @param {loginRequest} payload - Os dados de login.
   *
   * @returns {Promise<Auth>} Uma promessa que resolve para um objeto de autenticação.
   */
  login: async (payload: loginRequest): Promise<Auth> => {
    const { data } = await performPost<Auth>(urls.authenticate, payload);

    const authResponse = Auth.create(data);

    return authResponse;
  },
};
