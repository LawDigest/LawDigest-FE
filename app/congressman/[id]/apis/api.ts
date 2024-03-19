import http from '@/api/config/core';
import { FeedResponse } from '@/types';
import { CongressmanResponse } from '../types';

export const getBillByCongressmanId = async (page: number, congressmanId: string, isRepresent: boolean) =>
  http.get<FeedResponse>({
    url: `/congressman/bill_info`,
    params: { congressman_id: congressmanId, is_represent: isRepresent, page, size: 3 },
  });

export const getCongressmanDetail = (congressmanId: string) =>
  http.get<CongressmanResponse>({
    url: `/congressman/detail`,
    params: { congressman_id: congressmanId },
  });
