import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

/**
 * Configuração de uma requisição.
 *
 * @typedef {AxiosRequestConfig} RequestConfig
 */
type RequestConfig = AxiosRequestConfig;

/**
 * Resposta de uma requisição.
 *
 * @typedef {AxiosResponse<T>} Response<T>
 */
type Response<T> = AxiosResponse<T>;

/**
 * Realiza uma requisição GET.
 *
 * @param {string} url - A URL da requisição.
 * @param {RequestConfig} config - A configuração da requisição.
 *
 * @returns {Promise<Response<T>>} Uma promessa que resolve para a resposta da requisição.
 */
export function performGet<T>(
  url: string,
  config: RequestConfig = {}
): Promise<Response<T>> {
  return axiosInstance.get<T, Response<T>>(url, config);
}

/**
 * Realiza uma requisição POST.
 *
 * @param {string} url - A URL da requisição.
 * @param {unknown} data - Os dados a serem enviados na requisição.
 * @param {RequestConfig} config - A configuração da requisição.
 *
 * @returns {Promise<Response<T>>} Uma promessa que resolve para a resposta da requisição.
 */
export function performPost<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.post<T, Response<T>>(url, data, config);
}

/**
 * Realiza uma requisição PATCH.
 *
 * @param {string} url - A URL da requisição.
 * @param {unknown} data - Os dados a serem enviados na requisição.
 * @param {RequestConfig} config - A configuração da requisição.
 *
 * @returns {Promise<Response<T>>} Uma promessa que resolve para a resposta da requisição.
 */
export function performPatch<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.patch<T, Response<T>>(url, data, config);
}

/**
 * Realiza uma requisição PUT.
 *
 * @param {string} url - A URL da requisição.
 * @param {unknown} data - Os dados a serem enviados na requisição.
 * @param {RequestConfig} config - A configuração da requisição.
 *
 * @returns {Promise<Response<T>>} Uma promessa que resolve para a resposta da requisição.
 */
export function performPut<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.put<T, Response<T>>(url, data, config);
}

/**
 * Realiza uma requisição DELETE.
 *
 * @param {string} url - A URL da requisição.
 * @param {RequestConfig} config - A configuração da requisição.
 *
 * @returns {Promise<Response<T>>} Uma promessa que resolve para a resposta da requisição.
 */
export function performDelete<T>(
  url: string,
  config: RequestConfig = {}
): Promise<Response<T>> {
  return axiosInstance.delete<T, Response<T>>(url, config);
}
