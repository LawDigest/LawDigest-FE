'use client';

import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { BILL_TAB } from '@/constants';
import { ValueOf } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { getBillByCongressmanId, getCongressmanDetail } from './api';

export const useGetBillByCongressman = (
  id: string,
  type: ValueOf<typeof BILL_TAB> | Dispatch<SetStateAction<ValueOf<typeof BILL_TAB>>>,
) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/congressman/bill_info', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id, type),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetCongressmanDetail = ({ id, queryClient }: { id: string; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/congressman/detail', id],
    queryFn: () => getCongressmanDetail(id),
  });
