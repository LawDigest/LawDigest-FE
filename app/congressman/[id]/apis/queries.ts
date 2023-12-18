'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { BILL_TAB_KO } from '@/constants';
import { ValueOf } from '@/types';
import { getBillByCongressmanId } from './api';

export const useGetBillByCongressman = (id: string, stage: ValueOf<typeof BILL_TAB_KO>) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/congressman/detail', id],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByCongressmanId(pageParam, id, stage),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      // eslint-disable-next-line
      const { pagination_response } = data || {};
      // eslint-disable-next-line
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
