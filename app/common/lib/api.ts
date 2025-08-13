import axios, { type AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';
import qs from 'qs';
import { useRouter } from 'next/navigation';
import _ from 'lodash';
import { ACCESS_TOKEN } from '@/app/common/constants';

export const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

apiClient.interceptors.request.use(
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

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      return apiClient
        .post('/auth/reissue/token')
        .then(() => {
          const router = useRouter();
          const { response } = error;

          const newConfig = _.cloneDeep(response!.config);
          const accessToken = getCookie(ACCESS_TOKEN)!;
          newConfig.headers.Authorization = `Bearer ${accessToken}`;

          return axios(newConfig).then(() => router.refresh());
        })
        .catch(() => {
          deleteCookie(ACCESS_TOKEN);
          const router = useRouter();
          router.push('/login');
        });
    }

    return Promise.reject(error);
  },
);
