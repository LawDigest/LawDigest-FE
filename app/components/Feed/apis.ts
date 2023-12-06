import http from '@/api/config/core';

export const getBill = async (page: number) => {
  await http.get({
    // FIXME: API 나오면 주소 수정
    url: '/bills',
    params: page,
  });
};
