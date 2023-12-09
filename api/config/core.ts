import axios, {
  AxiosError,
  type AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  Method,
  AxiosRequestConfig,
} from 'axios';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN, HTTP_METHODS } from '@/constants';
import { BaseResponse } from '@/types';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie(ACCESS_TOKEN)!;

    if (!accessToken) {
      return config;
    }
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    if (!error.response) {
      // eslint-disable-next-line
      console.error('에러 응답이 없습니다.');
      return Promise.reject(error);
    }
    // TODO: 에러 세분화
    // eslint-disable-next-line
    console.error('에러가 발생했습니다.');
    return Promise.reject(error);
  },
);

const createApiMethod =
  (instance: AxiosInstance, method: Method) =>
  <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> =>
    instance({ ...config, method });

// eslint-disable-next-line
export default {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};
