'use client';

import { QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getUserInfo, getFollowingParty, getFollowingCongressman, getBillBookmarked } from './apis';

export const useGetUserInfo = (queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/user/info'],
    queryFn: () => getUserInfo(),
  });

export const useGetFollowingParty = (queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/user/following/party'],
    queryFn: () => getFollowingParty(),
  });

export const useGetFollowingCongressman = (queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/user/liking/congressman'],
    queryFn: () => getFollowingCongressman(),
  });

export const useGetBillBookmarked = () =>
  useSuspenseInfiniteQuery({
    queryKey: ['/user/bookmarking/bill'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillBookmarked(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
