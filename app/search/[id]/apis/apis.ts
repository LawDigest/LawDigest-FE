import { apiClient } from '@/app/common/lib/api';
import type { SearchCongressmanPartyResponse, SearchBillResponse } from '@/app/search/[id]/types';

export const getSearchCongressmanParty = async (searchWord: string) =>
  apiClient.get<SearchCongressmanPartyResponse>('/search/congressman/party', {
    params: { search_word: searchWord },
  });

export const getSearchBill = async (searchWord: string, page: number) =>
  apiClient.get<SearchBillResponse>('/search/bill', {
    params: { search_word: searchWord, page },
  });
