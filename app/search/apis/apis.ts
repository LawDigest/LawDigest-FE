import http from '@/api/config/core';
import { SearchCongressmanPartyResponse, SearchBillResponse } from '@/types';

export const getSearchCongressmanParty = async (searchWord: string, page: number) =>
  http.get<SearchCongressmanPartyResponse>({
    url: `/search/congressman/party`,
    params: { search_word: searchWord, page },
  });

export const getSearchBill = async (searchWord: string, page: number) =>
  http.get<SearchBillResponse>({
    url: `/search/bill`,
    params: { search_word: searchWord, page },
  });
