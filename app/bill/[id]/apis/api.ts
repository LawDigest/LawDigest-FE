import http from '@/api/config/core';
import { BillResponse, ViewCountResponse, BookmarkResponse } from '@/types';

export const getBillDetail = (bill_id: string) =>
  http.get<BillResponse>({
    url: `/bill/detail/${bill_id}`,
  });

export const patchViewCount = (bill_id: string) =>
  http.patch<ViewCountResponse>({
    url: `/bill/view_count`,
    params: { bill_id },
  });

export const postBookmark = (bill_id: string, likeChecked: boolean) =>
  http.post<BookmarkResponse>({
    url: `/bill/bookmark`,
    params: { bill_id, likeChecked },
  });
