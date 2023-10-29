import { RegisterRequest } from '../../interfaces/api/requests/User';
import Auth from '../../models/Auth';
import { performPost } from '../api/apiRequests';

const urls = {
  users: '/users',
};

export const UserService = {
  register: async (payload: RegisterRequest): Promise<unknown> => {
    const { data } = await performPost<Auth>(urls.users, payload);

    return data;
  },
};
