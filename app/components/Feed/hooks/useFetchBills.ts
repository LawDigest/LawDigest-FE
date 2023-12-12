'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBill } from '../apis';

const billKeys = {
  all: ['/bill/mainfeed'] as const,
  lists: () => [...billKeys.all, 'list'] as const,
};

export const useFetchBills = () =>
  useInfiniteQuery({
    queryKey: billKeys.lists(),
    queryFn: ({ pageParam }: { pageParam: number }) => getBill(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({
      data: {
        pagination_reponse: { last_page, page_number },
      },
    }) => (last_page ? undefined : page_number + 1),
  });
