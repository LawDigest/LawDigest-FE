import http from '@/api/config/core';
import { DistrictListResponse } from '@/types/type/election/district';

export const getDistrictList = async ({ cityName, guName }: { cityName?: string; guName?: string }) =>
  http.get<DistrictListResponse>({
    url: `/district/list`,
    params: { city_name: cityName, gu_name: guName },
  });
