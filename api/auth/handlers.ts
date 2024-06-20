/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import axios, { AxiosError } from 'axios';

export const handleSuccessReissueToken = (error: AxiosError) => {
  const { response } = error;

  const accessToken = getCookie(ACCESS_TOKEN)!;
  response!.config.headers.Authorization = `Bearer ${accessToken}`;

  return axios(response!.config);
};

export const handleFailReissueToken = (error: AxiosError) => {
  deleteCookie(ACCESS_TOKEN);
  const router = useRouter();
  router.push('/login');

  return Promise.reject(error);
};
