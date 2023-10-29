import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '../../../interfaces/api/requests/Auth';

const AUTH_KEYS = {
  login: 'login',
};

/**
 * Hook para lidar com o login.
 *
 * @param {(payload: loginRequest) => Promise<void>} handleLogin A função para lidar com o login.
 *
 * @returns {UseMutationResult<void, Error, loginRequest>} O resultado da mutação do React Query.
 */
export function useLogin(
  handleLogin: (payload: loginRequest) => Promise<void>
) {
  return useMutation<void, Error, loginRequest>({
    mutationFn: (payload) => handleLogin(payload),
    mutationKey: [AUTH_KEYS.login],
  });
}
