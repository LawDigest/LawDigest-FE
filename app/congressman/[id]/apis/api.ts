import http from '@/api/config/core';
import { FeedResponse } from '@/types';

export const getBillByCongressmanId = async (page: number, congressmanId: string) =>
  http.get<FeedResponse>({
    url: `/bill/${congressmanId}`,
    params: { page, size: 3 },
  });
