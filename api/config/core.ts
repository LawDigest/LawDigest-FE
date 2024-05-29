import axios, {
  type AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  Method,
  AxiosRequestConfig,
} from 'axios';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN, HTTP_METHODS } from '@/constants';
import { BaseResponse } from '@/types';
import qs from 'qs';
import { handleSuccessReissueToken, handleFailReissueToken } from '../auth';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

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
    if (error.response?.status === 401) {
      axiosInstance
        .patch('/auth/reissue/token')
        .then((response) => {
          if (response.status === 200) {
            handleSuccessReissueToken();
          }
        })
        .catch((response) => {
          if (response.status === 500) {
            handleFailReissueToken();
          }
        });
    }

    if (!error.response) {
      // eslint-disable-next-line
      console.error('에러 응답이 없습니다.');
      return Promise.reject(error);
    }
    // eslint-disable-next-line
    console.error('에러가 발생했습니다.');
    return Promise.reject(error);
  },
);

const createApiMethod =
  (instance: AxiosInstance, method: Method) =>
  <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> =>
    instance({ ...config, method });

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.get),
  post: createApiMethod(axiosInstance, HTTP_METHODS.post),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.patch),
  put: createApiMethod(axiosInstance, HTTP_METHODS.put),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.delete),
};

export default http;
