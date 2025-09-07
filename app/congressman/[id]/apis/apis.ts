import { Dispatch, SetStateAction } from 'react';
import { apiClient } from '@/app/common/lib/api';
import type { FeedResponse } from '@/app/bill/[id]/types';
import type { CongressmanDetailResponse, CongressmanFollowResponse } from '@/app/congressman/[id]/types';
import type { ValueOf } from '@/app/common/types';
import { BILL_TAB } from '@/app/bill/[id]/constants/bill';

export const getBillByCongressmanId = async (
  page: number,
  congressmanId: string,
  type: ValueOf<typeof BILL_TAB> | Dispatch<SetStateAction<ValueOf<typeof BILL_TAB>>>,
) =>
  apiClient.get<FeedResponse>('/congressman/bill_info', {
    params: { congressman_id: congressmanId, type, page, size: 3 },
  });

export const getCongressmanDetail = (congressmanId: string) =>
  apiClient.get<CongressmanDetailResponse>('/congressman/detail', {
    params: { congressman_id: congressmanId },
  });

export const patchCongressmanFollow = (congressmanId: string, likeChecked: boolean) =>
  apiClient.patch<CongressmanFollowResponse>('/congressman/user/like', {
    params: { congressman_id: congressmanId, like_checked: likeChecked },
  });
