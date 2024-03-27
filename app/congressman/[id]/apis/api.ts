import { Dispatch, SetStateAction } from 'react';
import http from '@/api/config/core';
import { FeedResponse, CongressmanDetailResponse, ValueOf } from '@/types';
import { BILL_TAB } from '@/constants';

export const getBillByCongressmanId = async (
  page: number,
  congressmanId: string,
  type: ValueOf<typeof BILL_TAB> | Dispatch<SetStateAction<ValueOf<typeof BILL_TAB>>>,
) =>
  http.get<FeedResponse>({
    url: `/congressman/bill_info`,
    params: { congressman_id: congressmanId, type, page, size: 3 },
  });

export const getCongressmanDetail = (congressmanId: string) =>
  http.get<CongressmanDetailResponse>({
    url: `/congressman/detail`,
    params: { congressman_id: congressmanId },
  });
