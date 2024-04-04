import http from '@/api/config/core';
import { BillResponse, ViewCountResponse, BookmarkResponse } from '@/types';

export const getBillDetail = ({ id }: { id: string }) =>
  http.get<BillResponse>({
    url: `/bill/detail/${id}`,
  });

export const patchViewCount = (id: string) =>
  http.patch<ViewCountResponse>({
    url: `/bill/view_count`,
    params: { bill_id: id },
  });

export const postBookmark = (bill_id: string, likeChecked: boolean) =>
  http.post<BookmarkResponse>({
    url: `/bill/bookmark`,
    params: { bill_id, likeChecked },
  });
