'use client';

import { QueryClient } from '@tanstack/react-query';
import { CookieValueTypes } from 'cookies-next';
import { getDistrictId } from './apis';

export const useGetDistrictId = ({
  queryClient,
  cityName,
  guName,
  districtName,
}: {
  queryClient: QueryClient;
  cityName: CookieValueTypes;
  guName: CookieValueTypes;
  districtName: CookieValueTypes;
}) =>
  queryClient.fetchQuery({
    queryKey: ['/district'],
    queryFn: () => getDistrictId({ cityName, guName, districtName }),
  });
