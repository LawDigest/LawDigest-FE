import { Method } from 'axios';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const HTTP_METHODS: Record<string, Method> = {
  get: 'get',
  post: 'post',
  patch: 'patch',
  delete: 'delete',
} as const;
