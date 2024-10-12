'use client';

import { useQuery } from '@tanstack/react-query';
import { getTimelineFeed } from './apis';

export const useGetTimelineFeed = (billProposeDate: string) =>
  useQuery({
    queryKey: ['/time-line/feed', billProposeDate],
    queryFn: () => getTimelineFeed(billProposeDate),
  });
