import { Dispatch, SetStateAction } from 'react';
import { apiClient } from '@/app/common/lib/api';
import type { PartyDetailResponse, PartyCongressmanResponse, PartyFollowResponse } from '@/app/party/[id]/types';
import type { FeedResponse } from '@/app/bill/[id]/types';
import type { ValueOf } from '@/app/common/types';
import { BILL_TAB } from '@/app/bill/[id]/constants';

export const getBillByParty = async (
  partyId: number,
  type: ValueOf<typeof BILL_TAB> | Dispatch<SetStateAction<ValueOf<typeof BILL_TAB>>>,
  page: number,
) =>
  apiClient.get<FeedResponse>('/party/bill', {
    params: { party_id: partyId, type, page, size: 3 },
  });

export const getPartyDetail = (partyId: number) =>
  apiClient.get<PartyDetailResponse>('/party/detail', {
    params: { party_id: partyId },
  });

export const getPartyCongressman = async (partyId: number) =>
  apiClient.get<PartyCongressmanResponse>('/party/congressman', {
    params: { party_id: partyId },
  });

export const patchPartyFollow = (partyId: number, followChecked: boolean) =>
  apiClient.patch<PartyFollowResponse>('/party/user/follow', {
    params: { party_id: partyId, follow_checked: followChecked },
  });
