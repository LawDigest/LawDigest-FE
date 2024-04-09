'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { useGetDistrictCandidateList } from '@/app/election/apis';

export default function CandidateList({ districtId }: { districtId: number }) {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetDistrictCandidateList({ districtId });
  const [candidates, setCandidates] = useState(
    data ? data.pages.flatMap(({ data: { district_candidate_list_dto_list: responses } }) => responses) : [],
  );

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
    setCandidates([]);
    refetch();
  }, [districtId]);

  return (
    <div>
      <div>list</div>
    </div>
  );
}
