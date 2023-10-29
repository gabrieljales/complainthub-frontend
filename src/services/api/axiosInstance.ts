import axios from 'axios';

/**
 * Instância do axios com a URL base definida.
 *
 * @type {AxiosInstance}
 */
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});
