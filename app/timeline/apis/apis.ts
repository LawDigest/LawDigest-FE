import http from '@/api';
import { TimelineFeedResponse, TimelineBillState } from '@/types';

export const getTimelineFeed = (billProposeDate: string) =>
  http.get<TimelineFeedResponse>({
    url: `/time-line/feed`,
    params: { billProposeDate },
  });

export const getTimelineBillState = () =>
  http.get<TimelineBillState>({
    url: `/time-line/bill-state`,
  });
