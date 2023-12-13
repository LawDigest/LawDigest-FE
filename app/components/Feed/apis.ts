import http from '@/api/config/core';
import { FEED_TAB_KO } from '@/constants';
import { FeedResponse, ValueOf } from '@/types';

export const getBill = async (page: number, stage: ValueOf<typeof FEED_TAB_KO>) =>
  http.get<FeedResponse>({
    url: '/bill/mainfeed',
    params: { page, size: 3, stage },
  });
