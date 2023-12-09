import http from '@/api/config/core';
import { BillDetailResponse } from './type';

export const getBillDetail = ({ id }: { id: number }) =>
  http.get<BillDetailResponse>({
    url: `/bill/${id}`,
  });
