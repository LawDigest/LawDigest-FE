import http from '@/api';
import {
  CandidateDetailResponse,
  DistrictCandidateResponse,
  DistrictIdResponse,
  DistrictListResponse,
  ProportionalCandidateResponse,
  ProportionalPartyInfoResponse,
  ProportionalPartyListResponse,
  ProportionalPromiseResponse,
  SearchCandidateResponse,
} from '@/types';
import { CookieValueTypes } from 'cookies-next';

export const getDistrictList = async ({ cityName, guName }: { cityName?: string; guName?: string }) =>
  http.get<DistrictListResponse>({
    url: `/district/list`,
    params: { city_name: cityName, gu_name: guName },
  });

export const getDistrictId = async ({
  cityName,
  guName,
  districtName,
}: {
  cityName: CookieValueTypes;
  guName: CookieValueTypes;
  districtName: CookieValueTypes;
}) =>
  http.get<DistrictIdResponse>({
    url: `/district`,
    params: { city_name: cityName, gu_name: guName, district_name: districtName },
  });

export const getDistrictCandidateList = async (districtId: number, page: number) =>
  http.get<DistrictCandidateResponse>({
    url: `/districtCandidate/list`,
    params: { district_id: districtId, page },
  });

export const getCandidateDetail = async ({ candidateId, type }: { candidateId: number; type: string | null }) =>
  http.get<CandidateDetailResponse>({
    url: `/party/candidate/detail`,
    params: { candidate_id: candidateId, type },
  });

export const getProportionalPartyList = async (page: number) =>
  http.get<ProportionalPartyListResponse>({
    url: `/proportional_candidate/party_logo`,
    params: { page },
  });

export const getProportionalPartyInfo = async ({ partyId }: { partyId: number }) =>
  http.get<ProportionalPartyInfoResponse>({
    url: `/proportional_candidate/party_info`,
    params: { party_id: partyId },
  });

export const getProportionalPromise = async (partyId: number, page: number) =>
  http.get<ProportionalPromiseResponse>({
    url: `/proportional_candidate/promise`,
    params: { party_id: partyId, page },
  });

export const getProportionalCandidate = async (partyId: number, page: number) =>
  http.get<ProportionalCandidateResponse>({
    url: `/proportional_candidate/list`,
    params: { party_id: partyId, page },
  });

export const getSearchCandidate = async (searchWord: string, page: number) =>
  http.get<SearchCandidateResponse>({
    url: `/search/candidate`,
    params: { search_word: searchWord, page },
  });
