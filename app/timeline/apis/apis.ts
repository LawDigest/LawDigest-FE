import http from '@/api';
import { TimelineFeedResponse } from '@/types/type/timeline/timeline';

export const getTimelineFeed = (billProposeDate: string) =>
  http.get<TimelineFeedResponse>({
    url: `/time-line/feed`,
    params: { billProposeDate },
  });
