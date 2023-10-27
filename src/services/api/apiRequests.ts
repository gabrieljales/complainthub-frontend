import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosInstance } from './axiosInstance';

type RequestConfig = AxiosRequestConfig;
type Response<T> = AxiosResponse<T>;

export function performGet<T>(
  url: string,
  config: RequestConfig = {}
): Promise<Response<T>> {
  return axiosInstance.get<T, Response<T>>(url, config);
}

export function performPost<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.post<T, Response<T>>(url, data, config);
}

export function performPatch<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.patch<T, Response<T>>(url, data, config);
}

export function performPut<T>(
  url: string,
  data?: unknown,
  config?: RequestConfig
): Promise<Response<T>> {
  return axiosInstance.put<T, Response<T>>(url, data, config);
}

export function performDelete<T>(
  url: string,
  config: RequestConfig = {}
): Promise<Response<T>> {
  return axiosInstance.delete<T, Response<T>>(url, config);
}
