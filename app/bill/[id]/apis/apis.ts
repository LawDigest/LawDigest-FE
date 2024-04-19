import http from '@/api/config/core';
import { BillResponse, ViewCountResponse, BookmarkResponse } from '@/types';

export const getBillDetail = (billId: string) =>
  http.get<BillResponse>({
    url: `/bill/detail/${billId}`,
  });

export const patchViewCount = (billId: string) =>
  http.patch<ViewCountResponse>({
    url: `/bill/view_count`,
    params: { bill_id: billId },
  });

export const postBookmark = (billId: string, likeChecked: boolean) =>
  http.post<BookmarkResponse>({
    url: `/bill/user/bookmark`,
    params: { bill_id: billId, likeChecked },
  });
