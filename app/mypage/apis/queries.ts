'use client';

import { QueryClient } from '@tanstack/react-query';
import { getUserInfo, getFollowingParty, getFollowingCongressman } from './apis';

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
