'use client';

import { QueryClient } from '@tanstack/react-query';
import { CookieValueTypes } from 'cookies-next';
import { getDistrictList, getDistrictId } from './apis';

export const useGetDistrictList = ({
  queryClient,
  cityName,
  guName,
}: {
  queryClient: QueryClient;
  cityName?: string;
  guName?: string;
}) =>
  queryClient.fetchQuery({
    queryKey: ['/district/list'],
    queryFn: () => getDistrictList({ cityName, guName }),
  });

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
