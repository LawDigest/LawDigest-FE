import http from '@/api/config/core';

export const postWithdraw = () =>
  http.delete({
    url: `/auth/user/withdraw`,
  });
