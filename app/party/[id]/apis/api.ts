import { Dispatch, SetStateAction } from 'react';
import http from '@/api/config/core';
import { FeedResponse, PartyDetailResponse, ValueOf } from '@/types';
import { BILL_TAB } from '@/constants';

export const getBillByParty = async (
  partyId: number,
  type: ValueOf<typeof BILL_TAB> | Dispatch<SetStateAction<ValueOf<typeof BILL_TAB>>>,
  page: number,
) =>
  http.get<FeedResponse>({
    url: `/party/bill`,
    params: { party_id: partyId, type, page, size: 3 },
  });

export const getPartyDetail = (partyId: number) =>
  http.get<PartyDetailResponse>({
    url: `/party/detail`,
    params: { party_id: partyId },
  });
