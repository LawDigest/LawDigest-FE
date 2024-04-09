'use client';

import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { CookieValueTypes } from 'cookies-next';
import { CandidateType } from '@/types/type/election/district';
import { getDistrictId, getDistrictCandidateList, getCandidateDetail } from './apis';

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

export const useGetDistrictCandidateList = ({ districtId }: { districtId: number }) =>
  useInfiniteQuery({
    queryKey: ['/districtCandidate/list', districtId],
    queryFn: ({ pageParam }: { pageParam: number }) => getDistrictCandidateList(districtId, pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetCandidateDetail = ({
  queryClient,
  candidateId,
  type,
}: {
  queryClient: QueryClient;
  candidateId: string;
  type: CandidateType;
}) =>
  queryClient.fetchQuery({
    queryKey: ['/party/candidate/detail', candidateId, type],
    queryFn: () => getCandidateDetail({ candidateId, type }),
  });
