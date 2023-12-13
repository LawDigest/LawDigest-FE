'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillByParty } from './api';

export const useGetBillByParty = (id: string) =>
  useInfiniteQuery({
    queryKey: ['/party', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByParty(pageParam, id),
    initialPageParam: 0,
    getNextPageParam: ({
      result: {
        pagination_reponse: { last_page, page_number },
      },
    }) => (last_page ? undefined : page_number + 1),
  });
