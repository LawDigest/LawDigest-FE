'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getBillByCongressmanId } from './api';

export const useGetBillByCongressman = (id: string) =>
  useInfiniteQuery({
    queryKey: ['/bill/mainfeed', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id),
    initialPageParam: 0,
    getNextPageParam: ({
      result: {
        pagination_reponse: { last_page, page_number },
      },
    }) => (last_page ? undefined : page_number + 1),
  });
