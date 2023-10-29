import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '../../../interfaces/api/requests/Auth';

const AUTH_KEYS = {
  login: 'login',
};

export function useLogin(
  handleLogin: (payload: loginRequest) => Promise<void>
) {
  return useMutation<void, Error, loginRequest>({
    mutationFn: (payload) => handleLogin(payload),
    mutationKey: [AUTH_KEYS.login],
  });
}
