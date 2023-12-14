'use clinet';

import { QueryClient } from '@tanstack/react-query';
import { getBillDetail } from './api';

export const useBillDetail = ({ id, queryClient }: { id: string; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/bill/detail', id],
    queryFn: () => getBillDetail({ id }),
  });
