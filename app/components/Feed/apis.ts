import http from '@/api/config/core';
// import { FEED_TAB_KO } from '@/constants';
// import { ValueOf } from '@/types';
import { FeedResponse } from '@/types';

// stage: ValueOf<typeof FEED_TAB_KO>
export const getBill = async (page: number) =>
  http.get<FeedResponse>({
    url: '/bill/mainfeed',
    // params: { page, size: 3, stage },
    params: { page, size: 3 },
  });
