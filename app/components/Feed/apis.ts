import http from '@/api/config/core';
import { FeedResponse } from './types';

export const getBill = async (page: number) =>
  http.get<FeedResponse>({
    url: '/bill/mainfeed',
    params: { page, size: 3 },
  });
