import http from '@/api/config/core';
import { FEED_TAB, FEED_TAB_KO } from '@/constants';
import { FeedResponse } from '@/types';

export const getBill = async (page: number, stage: keyof typeof FEED_TAB) =>
  http.get<FeedResponse>({
    url: '/bill/mainfeed',
    params: { page, size: 3, stage: FEED_TAB_KO[stage] },
  });
