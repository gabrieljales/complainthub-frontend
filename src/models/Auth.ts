import { AuthUser, LoginDTO } from '../interfaces/api/models/Auth';

class Auth {
  user!: AuthUser;

  token!: string;

  constructor(data: Auth) {
    Object.assign(this, { ...data });
  }

  static create(data: LoginDTO) {
    return new Auth({
      user: data?.user,
      token: data?.token,
    });
  }
}

export default Auth;
