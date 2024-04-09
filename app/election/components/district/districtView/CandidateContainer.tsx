'use client';

import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useIntersect } from '@/hooks';
import { useGetDistrictCandidateList } from '@/app/election/apis';
import CandidateList from './CandidateList';

export default function CandidateContainer({ districtId }: { districtId: number }) {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetDistrictCandidateList({ districtId });
  const [candidates, setCandidates] = useState(
    data ? data.pages.flatMap(({ data: { district_candidate_list_dto_list: responses } }) => responses) : [],
  );
  const queryClient = useQueryClient();

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setCandidates(() => [
        ...data.pages.flatMap(({ data: { district_candidate_list_dto_list: responses } }) => responses),
      ]);
    }
  }, [data]);

  useEffect(() => {
    queryClient.removeQueries({
      queryKey: ['/districtCandidate/list', districtId],
    });
    refetch();
  }, []);

  return (
    <div>
      <CandidateList candidates={candidates} isFetching={isFetching} fetchRef={fetchRef} />
    </div>
  );
}
