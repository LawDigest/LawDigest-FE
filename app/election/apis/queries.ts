'use client';

import { QueryClient } from '@tanstack/react-query';
import { getDistrictList } from './apis';

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
