'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillByParty } from './api';

export const useGetBillByParty = (id: string) =>
  useInfiniteQuery({
    queryKey: ['/party', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByParty(pageParam, id),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
