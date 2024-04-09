import { ProportionalCandidateProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import CandidateItem from './CandidateItem';

export default function CandidateList({
  candidateList,
  isFetching,
  fetchRef,
}: {
  candidateList: ProportionalCandidateProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {candidateList.map((candidate) => (
        <CandidateItem key={candidate.proportional_candidate_id} {...candidate} />
      ))}
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </>
  );
}
