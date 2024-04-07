'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getSearchCongressmanParty, getSearchBill } from './apis';

export const useGetSearchCongressmanParty = (searchWord: string) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/search/congressman/party'],
    queryFn: ({ pageParam }: { pageParam: number }) => getSearchCongressmanParty(searchWord, pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetSearchBill = (searchWord: string) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/search/bill'],
    queryFn: ({ pageParam }: { pageParam: number }) => getSearchBill(searchWord, pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
