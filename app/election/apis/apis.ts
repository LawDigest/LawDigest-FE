import http from '@/api/config/core';
import {
  CandidateDetailResponse,
  DistrictCandidateResponse,
  DistrictIdResponse,
  DistrictListResponse,
  PropotionalPartyInfoResponse,
  PropotionalPartyListResponse,
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

export const getPropotionalPartyList = async (page: number) =>
  http.get<PropotionalPartyListResponse>({
    url: `/proportional_candidate/party_logo`,
    params: { page },
  });

export const getPropotionalPartyInfo = async ({ partyId }: { partyId: number }) =>
  http.get<PropotionalPartyInfoResponse>({
    url: `/proportional_candidate/party_info`,
    params: { party_id: partyId },
  });
