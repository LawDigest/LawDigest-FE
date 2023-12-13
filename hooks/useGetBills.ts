'use client';

import { getBill } from '@/app/components/Feed/apis';
import { FEED_TAB } from '@/constants';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetBills = (stage: keyof typeof FEED_TAB) =>
  useInfiniteQuery({
    queryKey: ['/bill/mainfeed'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBill(pageParam, stage),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
