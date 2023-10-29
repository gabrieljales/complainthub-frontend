import { UserDTO } from '../interfaces/api/models/User';
import { UserRole } from '../types/global/UserRole';

class User {
  createdAt!: string;

  email!: string;

  id!: string;

  lastName!: string;

  name!: string;

  password!: string;

  type!: UserRole;

  updatedAt!: string;

  constructor(data: User) {
    Object.assign(this, { ...data });
  }

  static create(data: UserDTO) {
    return new User({
      createdAt: data?.created_at,
      email: data?.email,
      id: data?.id,
      lastName: data?.last_name,
      name: data?.name,
      password: data.password,
      type: data?.type,
      updatedAt: data?.updated_at,
    });
  }
}

export default User;
