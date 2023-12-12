'use client';

import { getBill } from '@/app/components/Feed/apis';
import { useInfiniteQuery } from '@tanstack/react-query';

const billKeys = {
  all: ['bills'] as const,
  lists: () => [...billKeys.all, 'list'] as const,
};

export const useFetchBills = () =>
  useInfiniteQuery({
    queryKey: billKeys.lists(),
    queryFn: ({ pageParam }: { pageParam: number }) => getBill(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({
      result: {
        pagination_reponse: { last_page, page_number },
      },
    }) => (last_page ? undefined : page_number + 1),
  });
