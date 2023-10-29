import { AuthUser } from '../models/Auth';

export interface AuthRecord {
  user: AuthUser;
  token: string;
}

export interface loginRequest {
  email: string;
  password: string;
}
