import http from '@/api/config/core';
import { FeedResponse } from '@/types';

export const getBillByParty = async (page: number, partyId: string) =>
  http.get<FeedResponse>({
    url: `/bill/${partyId}`,
    params: { page, size: 3 },
  });
