import { AuthUser, LoginDTO } from '../interfaces/api/models/Auth';

/**
 * Classe que representa um objeto de autenticação.
 */
class Auth {
  user!: AuthUser;

  token!: string;

  constructor(data: Auth) {
    Object.assign(this, { ...data });
  }

  /**
   * Método estático para criar uma nova instância de autenticação.
   *
   * @param {LoginDTO} data - Os dados de login.
   * @returns {Auth} Uma nova instância de autenticação.
   */
  static create(data: LoginDTO) {
    return new Auth({
      user: data?.user,
      token: data?.token,
    });
  }
}

export default Auth;
