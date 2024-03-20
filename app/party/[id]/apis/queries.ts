'use client';

import { useSuspenseInfiniteQuery, QueryClient } from '@tanstack/react-query';
import { getBillByParty, getPartyDetail } from './api';

export const useGetBillByParty = (id: number, isRepresent: boolean) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/party/bill', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByParty(id, isRepresent, pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetPartyDetail = ({ id, queryClient }: { id: number; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/party/detail', id],
    queryFn: () => getPartyDetail(Number(id)),
  });
