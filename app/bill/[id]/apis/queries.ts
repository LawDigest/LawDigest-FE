'use clinet';

import { QueryClient, useMutation } from '@tanstack/react-query';
import { getBillDetail, patchViewCount, postBookmark } from './api';

export const useBillDetail = ({ id, queryClient }: { id: string; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/bill/detail', id],
    queryFn: () => getBillDetail({ id }),
  });

export const usePatchViewCount = async (bill_id: string) => {
  const response = await patchViewCount(bill_id);

  return response;
};
