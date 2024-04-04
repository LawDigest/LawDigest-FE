'use clinet';

import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBillDetail, patchViewCount, postBookmark } from './api';

export const useBillDetail = (bill_id: string, queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/bill/detail', bill_id],
    queryFn: () => getBillDetail(bill_id),
  });

export const usePatchViewCount = async (bill_id: string) => {
  const response = await patchViewCount(bill_id);

  return response;
};

export const usePostBookmark = (bill_id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (likeChecked: boolean) => postBookmark(bill_id, likeChecked),
    onSuccess: ({ data }) => {
      // queryClient.invalidateQueries({ queryKey: ['/bill/detail', bill_id] });
      queryClient.setQueryData(['/bill/detail', bill_id], data.like_checked);
      queryClient.invalidateQueries({ queryKey: ['/bill/mainfeed'] });
    },
  });
};
