import { RefObject } from 'react';
import { DistrictCandidateProps } from '@/types/type/election/district';
import { Spinner } from '@nextui-org/spinner';
import CandidateItem from './CandidateItem';

export default function CandidateList({
  candidates,
  isFetching,
  fetchRef,
}: {
  candidates: DistrictCandidateProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div>
      <div className="flex flex-col gap-5">
        {candidates.map((candidate) => (
          <CandidateItem key={candidate.district_candidate_id} {...candidate} />
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </div>
  );
}
