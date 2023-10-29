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

const AuthContext = createContext<AuthContextProps>({
  handleLogin: async () => {},
  useLogin,
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
