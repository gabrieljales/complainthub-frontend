import { createContext, useContext } from 'react';
import { UseMutationResult } from '@tanstack/react-query';
import { AuthUserWithRole } from '../interfaces/api/models/Auth';
import { loginRequest } from '../interfaces/api/requests/Auth';
import { useLogin } from '../hooks/api/Auth/AuthHooks';

interface AuthContextProps {
  authenticated?: boolean;
  loggedUser?: AuthUserWithRole | null;
  loading?: boolean;
  handleLogin: (payload: loginRequest) => Promise<void>;
  useLogin: (
    handleLogin: (payload: loginRequest) => Promise<void>
  ) => UseMutationResult<void, Error, loginRequest>;
  handleLogout: () => void;
}

/**
 * Cria um contexto de autenticação.
 *
 * @typedef {Object} AuthContextProps
 *
 * @property {boolean} [authenticated] - Se o usuário está autenticado.
 * @property {AuthUserWithRole | null} [loggedUser] - O usuário logado.
 * @property {boolean} [loading] - Se a autenticação está carregando.
 * @property {(payload: loginRequest) => Promise<void>} handleLogin - A função para lidar com o login.
 * @property {(handleLogin: (payload: loginRequest) => Promise<void>) => UseMutationResult<void, Error, loginRequest>} useLogin - O hook para lidar com o login.
 * @property {() => void} handleLogout - A função para lidar com o logout.
 */

const AuthContext = createContext<AuthContextProps>({
  handleLogin: async () => {},
  useLogin,
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
