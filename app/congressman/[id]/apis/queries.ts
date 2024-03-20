'use client';

import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getBillByCongressmanId, getCongressmanDetail } from './api';

export const useGetBillByCongressman = (id: string, isRepresent: boolean) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/congressman/bill_info', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id, isRepresent),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetCongressmanDetail = ({ id, queryClient }: { id: string; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/congressman/detail', id],
    queryFn: () => getCongressmanDetail(id),
  });
