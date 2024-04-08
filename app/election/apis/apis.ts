import http from '@/api/config/core';

export const getDistrictList = async ({ cityName, guName }: { cityName?: string; guName?: string }) =>
  http.get({
    url: `/district/list`,
    params: { city_name: cityName, gu_name: guName },
  });
