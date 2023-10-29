import { useMutation } from '@tanstack/react-query';
import { RegisterRequest } from '../../../interfaces/api/requests/User';
import { UserService } from '../../../services/user/UserService';

const { register } = UserService;

const USER_KEYS = {
  register: 'register',
};

export function useRegisterUser() {
  return useMutation<unknown, Error, RegisterRequest>({
    mutationFn: (payload) => register(payload),
    mutationKey: [USER_KEYS.register],
  });
}
