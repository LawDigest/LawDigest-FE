import http from '@/api/config/core';
import { SearchCongressmanPartyResponse } from '@/types/type/search/searchCongressmanParty';

export const getSearchCongressmanParty = async (searchWord: string, page: number) =>
  http.get<SearchCongressmanPartyResponse>({
    url: `/search/congressman/party`,
    params: { search_word: searchWord, page },
  });
