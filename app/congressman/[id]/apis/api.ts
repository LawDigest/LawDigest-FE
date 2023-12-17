import http from '@/api/config/core';
import { FeedResponse, ValueOf, Congressman } from '@/types';
import { BILL_TAB_KO } from '@/constants';

export const getBillByCongressmanId = async (page: number, congressmanId: string, stage: ValueOf<typeof BILL_TAB_KO>) =>
  http.get<FeedResponse & { congressman: Congressman }>({
    url: `/congressman/detail`,
    params: { page, size: 3, stage: stage === '공동발의한 법안' ? '공동' : '대표', congressman_id: congressmanId },
  });
