import User from '../../../models/User';

export type AuthUser = Pick<User, 'email' | 'name'>;
export type AuthUserWithRole = Pick<User, 'email' | 'name' | 'type'>;

export interface AuthDTO {
  created_at: string;
  email: string;
  token: string;
  password: string;
  user: AuthUser;
  updated_at: string;
}

export interface LoginDTO extends Pick<AuthDTO, 'user' | 'token'> {}
