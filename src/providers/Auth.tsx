import { ReactElement, useState, useEffect } from 'react';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { AuthUserWithRole } from '../interfaces/api/models/Auth';
import { axiosInstance } from '../services/api/axiosInstance';
import AuthContext from '../context/Auth';
import { loginRequest } from '../interfaces/api/requests/Auth';
import { UserRole } from '../types/global/UserRole';
import { AuthService } from '../services/auth/AuthService';
import { useLogin } from '../hooks/api/Auth/AuthHooks';

const { login } = AuthService;

function AuthProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState<AuthUserWithRole | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const { name, email, type }: AuthUserWithRole = user
      ? JSON.parse(user)
      : {};

    if (token) {
      axiosInstance.defaults.headers.Authorization = `Bearer ${JSON.parse(
        token
      )}`;
      setAuthenticated(true);
    }

    if (user) {
      setLoggedUser({
        email,
        name,
        type,
      });
    }

    setLoading(false);
  }, []);

  async function handleLogin(payload: loginRequest) {
    const { token, user } = await login(payload).then(
      (returnedData) => returnedData
    );

    localStorage.setItem('token', JSON.stringify(token));
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem('user', JSON.stringify(user));

    if (token) {
      const { type }: JwtPayload & { type: UserRole } = jwtDecode(token);

      setAuthenticated(true);
      setLoggedUser({
        name: user.name,
        email: user.email,
        type,
      });
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    setLoggedUser(null);

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    delete axiosInstance.defaults.headers.Authorization;
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loading,
        loggedUser,
        handleLogin,
        useLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
