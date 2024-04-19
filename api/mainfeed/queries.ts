'use client';

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { STAGE_TAB_KO } from '@/constants';
import { ValueOf } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { getBill, getBillByStage } from './apis';

export const useGetBills = () =>
  useSuspenseInfiniteQuery({
    queryKey: [' /bill/mainfeed'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBill(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetBillByStage = (
  stage: ValueOf<'전체' & typeof STAGE_TAB_KO> | Dispatch<SetStateAction<ValueOf<'전체' & typeof STAGE_TAB_KO>>>,
) =>
  useSuspenseInfiniteQuery({
    queryKey: ['/bill/mainfeed/stage'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByStage(pageParam, stage),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
