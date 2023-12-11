'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BillProps as Bill } from '@/components/Bill/type';
import { PaginationResponse } from '../types';

const billKeys = {
  all: ['bills'] as const,
  lists: () => [...billKeys.all, 'list'] as const,
};

export const useFetchBills = () =>
  useInfiniteQuery({
    queryKey: billKeys.lists(),
    queryFn: ({ pageParam }: { pageParam: number }) =>
      axios.get<PaginationResponse<Bill>>('/bills', {
        params: { page: pageParam },
      }),
    initialPageParam: 1,
    getNextPageParam: ({ data: { isLastPage, pageNumber } }) => (isLastPage ? undefined : pageNumber + 1),
  });
