'use clinet';

import { useMutation, useQuery, useQueryClient, QueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { ValueOf } from '@/app/common/types';
import { Dispatch, SetStateAction } from 'react';
import { STAGE_TAB_KO } from '@/app/bill/[id]/constants/bill';
import { getBillDetail, patchViewCount, postBookmark, getBillByStage, getBillPopular } from './apis';

export const useGetBillByStage = (
  stage: ValueOf<'전체' & typeof STAGE_TAB_KO> | Dispatch<SetStateAction<ValueOf<'전체' & typeof STAGE_TAB_KO>>>,
) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/bill/mainfeed'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByStage(pageParam, stage),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetBillPopular = () =>
  useQuery({
    queryKey: ['/bill/popular'],
    queryFn: () => getBillPopular(),
  });

export const useGetBillDetail = (billId: string, queryClient: QueryClient) =>
  queryClient.fetchQuery({
    queryKey: ['/bill/detail', billId],
    queryFn: () => getBillDetail(billId),
  });

export const usePatchViewCount = async (billId: string) => {
  const response = await patchViewCount(billId);

  return response;
};

export const usePatchBookmark = (billId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (likeChecked: boolean) => postBookmark(billId, likeChecked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/bill/detail', billId] });
      queryClient.invalidateQueries({ queryKey: ['/bill/mainfeed'] });
      queryClient.invalidateQueries({ queryKey: ['/user/bookmarking/bill'] });
      queryClient.invalidateQueries({ queryKey: ['/user/bookmarking/bill/count'] });
    },
  });
};
