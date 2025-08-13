import { Dispatch, SetStateAction } from 'react';
import { apiClient } from '@/app/common/lib/api';
import { STAGE_TAB_KO } from '@/app/bill/[id]/constants/bill';
import type {
  FeedResponse,
  FeedPopularResponse,
  BillResponse,
  ViewCountResponse,
  BookmarkResponse,
} from '@/app/bill/[id]/types';
import type { ValueOf } from '@/app/common/types';

export const getBillByStage = async (
  page: number,
  stage: ValueOf<'전체' & typeof STAGE_TAB_KO> | Dispatch<SetStateAction<ValueOf<typeof STAGE_TAB_KO>>>,
) =>
  apiClient.get<FeedResponse>('/bill/mainfeed', {
    params: { page, size: 3, stage },
  });

export const getBillPopular = async () => apiClient.get<FeedPopularResponse>(`/bill/popular`);

export const getBillDetail = async (billId: string) => apiClient.get<BillResponse>(`/bill/detail/${billId}`);

export const patchViewCount = (billId: string) =>
  apiClient.patch<ViewCountResponse>(`/bill/view_count`, {
    params: { bill_id: billId },
  });

export const postBookmark = (billId: string, likeChecked: boolean) =>
  apiClient.patch<BookmarkResponse>(`/bill/user/bookmark`, {
    params: { bill_id: billId, likeChecked },
  });
