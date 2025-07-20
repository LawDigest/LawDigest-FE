import { apiClient } from '@/app/common/lib';
import type { FeedResponse } from '@/app/bill/[id]/types';
import type { FollowingCongressmanType } from '@/app/following/types';

export const getFollowingCongressman = () => apiClient.get<FollowingCongressmanType[]>('/following-tab/congressman');

export const getFollowingBill = (page: number) =>
  apiClient.get<FeedResponse>('/following-tab/bill', { params: { page, size: 3 } });
