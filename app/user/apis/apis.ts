import { apiClient } from '@/app/common/lib';
import type {
  FollowingCongressmanResponse,
  FollowingPartyResponse,
  UserInfoResponse,
  BillBookmarkedCountResponse,
} from '@/app/user/types';
import type { FeedResponse } from '@/app/bill/[id]/types';

export const getUserInfo = async () => apiClient.get<UserInfoResponse>(`/user/info`);

export const getFollowingParty = async () => apiClient.get<FollowingPartyResponse>(`/user/following/party`);

export const getFollowingCongressman = async () =>
  apiClient.get<FollowingCongressmanResponse>(`/user/liking/congressman`);

export const postLogout = async () => apiClient.post(`/logout`);

export const getBillBookmarked = async (page: number) =>
  apiClient.get<FeedResponse>(`/user/bookmarking/bill`, { params: { page, size: 3 } });

export const getBillBookmarkedCount = async () =>
  apiClient.get<BillBookmarkedCountResponse>(`/user/bookmarking/bill/count`);
