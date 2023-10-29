import { UserRole } from '../../../types/global/UserRole';

export interface UserDTO {
  created_at: string;
  email: string;
  id: string;
  last_name: string;
  name: string;
  password: string;
  type: UserRole;
  updated_at: string;
}
