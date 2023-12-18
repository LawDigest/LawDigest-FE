import http from '@/api/config/core';
import { FeedResponse, ValueOf, PartyDetail } from '@/types';
import { BILL_TAB_KO } from '@/constants';

export const getBillByParty = async (page: number, id: string, stage: ValueOf<typeof BILL_TAB_KO>) =>
  http.get<FeedResponse & { party_detail: PartyDetail }>({
    url: `/party/detail/${id}`,
    params: { page, size: 3, stage: stage === '대표발의한 법안' ? 'represent' : 'public' },
  });
