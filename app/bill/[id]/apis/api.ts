import http from '@/api/config/core';
import { BillDetailResponse } from './type';

export const getBillDetail = ({ id }: { id: string }) =>
  http.get<BillDetailResponse>({
    url: `/bill/detail/${id}`,
  });
