'use client';

import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { CookieValueTypes } from 'cookies-next';
import {
  getDistrictId,
  getDistrictCandidateList,
  getCandidateDetail,
  getPropotionalPartyList,
  getPropotionalPartyInfo,
  getPropotionalPromise,
} from './apis';

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

export const useGetCandidateDetail = ({
  queryClient,
  candidateId,
  type,
}: {
  queryClient: QueryClient;
  candidateId: number;
  type: string | null;
}) =>
  queryClient.fetchQuery({
    queryKey: ['/party/candidate/detail', candidateId, type],
    queryFn: () => getCandidateDetail({ candidateId, type }),
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

export const useGetPropotionalPartyList = () =>
  useInfiniteQuery({
    queryKey: ['/proportional_candidate/party_logo'],
    queryFn: ({ pageParam }: { pageParam: number }) => getPropotionalPartyList(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });

export const useGetPropotionalPartyInfo = ({ partyId, queryClient }: { partyId: number; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/proportional_candidate/party_info', partyId],
    queryFn: () => getPropotionalPartyInfo({ partyId }),
  });

export const useGetPropotionalPromise = (partyId: number) =>
  useInfiniteQuery({
    queryKey: ['/proportional_candidate/promise'],
    queryFn: ({ pageParam }: { pageParam: number }) => getPropotionalPromise(partyId, pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
  });
