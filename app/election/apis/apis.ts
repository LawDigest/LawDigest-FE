import http from '@/api/config/core';
import { DistrictCandidateResponse, DistrictIdResponse, DistrictListResponse } from '@/types/type/election/district';
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
