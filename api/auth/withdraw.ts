import http from '@/api/config/core';

export const postWithdraw = () =>
  http.post({
    url: `/auth/withdraw`,
  });
