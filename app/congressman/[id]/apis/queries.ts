'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillByCongressmanId } from './api';

const billKeys = {
  all: ['bills'] as const,
  lists: () => [...billKeys.all, 'list'] as const,
};

export const useGetBillByCongressman = (id: string) =>
  useInfiniteQuery({
    queryKey: billKeys.lists(),
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id),
    initialPageParam: 0,
    getNextPageParam: ({
      result: {
        pagination_reponse: { last_page, page_number },
      },
    }) => (last_page ? undefined : page_number + 1),
  });
