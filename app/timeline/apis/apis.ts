import { apiClient } from '@/app/common/lib/api';
import type { TimelineResponse, TimelineBillState } from '@/app/timeline/types';

export const getTimelineFeed = (page: number) =>
  apiClient.get<TimelineResponse>('/time-line/feed/paging', {
    params: { page, size: 3 },
  });

export const getTimelineBillState = () =>
  apiClient.get<TimelineBillState>('/time-line/bill-state', {
    params: { size: 3 },
  });
