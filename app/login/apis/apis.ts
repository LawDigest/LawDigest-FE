import http from '@/api';

export const patchReissueToken = async () =>
  http.patch({
    url: '/auth/reissue/token',
  });
