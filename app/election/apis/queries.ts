'use client';

import { QueryClient } from '@tanstack/react-query';
import { getDistrictList } from './apis';

export const useGetDistrictList = ({
  cityName,
  guName,
  queryClient,
}: {
  cityName?: string;
  guName?: string;
  queryClient: QueryClient;
}) =>
  queryClient.fetchQuery({
    queryKey: ['/district/list'],
    queryFn: () => getDistrictList({ cityName, guName }),
  });
