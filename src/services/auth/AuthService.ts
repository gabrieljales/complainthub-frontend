import { loginRequest } from '../../interfaces/api/requests/Auth';
import Auth from '../../models/Auth';
import { performPost } from '../api/apiRequests';

const urls = {
  authenticate: '/authenticate',
};

export const AuthService = {
  login: async (payload: loginRequest): Promise<Auth> => {
    const { data } = await performPost<Auth>(urls.authenticate, payload);

    const authResponse = Auth.create(data);

    return authResponse;
  },
};
