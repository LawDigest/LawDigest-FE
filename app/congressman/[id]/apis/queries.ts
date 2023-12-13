'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillByCongressmanId } from './api';

export const useGetBillByCongressman = (id: string) =>
  useInfiniteQuery({
    queryKey: ['/bill/mainfeed', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
