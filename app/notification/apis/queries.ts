'use client';

import { QueryClient } from '@tanstack/react-query';
import { getNotification } from './apis';

export const useGetNotification = async (queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/notification'],
    queryFn: () => getNotification(),
  });
