import { createContext, useContext } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AuthUserWithRole, LoginDTO } from '../interfaces/api/models/Auth';
import { loginRequest } from '../interfaces/api/requests/Auth';

interface Props {
  authenticated?: boolean;
  loggedUser?: AuthUserWithRole | null;
  loading?: boolean;
  handleLogin: (data: loginRequest) => void;
  useLogin: UseMutateFunction<LoginDTO, Error, loginRequest>;
  handleLogout: () => void;
}

const AuthContext = createContext<Props>({
  handleLogin: () => {},
  useLogin: () => {},
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
