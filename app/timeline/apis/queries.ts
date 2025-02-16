'use client';

import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getTimelineFeed, getTimelineBillState } from './apis';

export const useGetTimelineFeed = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/time-line/feed'],
    queryFn: ({ pageParam }: { pageParam: string }) => getTimelineFeed(pageParam),
    initialPageParam: new Date().toISOString().split('T')[0],
    getNextPageParam: ({ data }) => {
      const { date } = data || {};
      const previousDate = new Date(date);
      previousDate.setDate(previousDate.getDate() - 1);
      return previousDate.toISOString().split('T')[0];
    },
  });

export const useGetTimelineBillState = () =>
  useQuery({
    queryKey: ['/time-line/bill-state'],
    queryFn: () => getTimelineBillState(),
  });
