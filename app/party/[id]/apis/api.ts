import http from '@/api/config/core';
import { FeedResponse, PartyDetailResponse } from '@/types';

export const getBillByParty = async (partyId: number, isRepresent: boolean, page: number) =>
  http.get<FeedResponse>({
    url: `/party/bill`,
    params: { party_id: partyId, is_represent: isRepresent, page, size: 3 },
  });

export const getPartyDetail = (partyId: number) =>
  http.get<PartyDetailResponse>({
    url: `/party/detail`,
    params: { party_id: partyId },
  });
