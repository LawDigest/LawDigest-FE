'use client';

import { useState, useEffect } from 'react';
import { useIntersect, useTabType } from '@/hooks';
import { PROPORTIONAL_TAB_KO } from '@/constants';
import { ProportionalPartyDetail, ProportionalTab, PromiseList, CandidateList } from '../../components';
import { useGetProportionalPromise, useGetProportionalCandidate } from '../../apis';

export default function ElectionParty({ params: { id } }: { params: { id: number } }) {
  const [type, setType] = useTabType<typeof PROPORTIONAL_TAB_KO>('정당 공약');

  const {
    data: promise,
    hasNextPage: hasNextPageP,
    isFetching: isFetchingP,
    fetchNextPage: fetchNextPageP,
    refetch: refetchP,
  } = useGetProportionalPromise(id);
  const [promiseList, setPromiseList] = useState(
    promise ? promise.pages.flatMap(({ data: { party_promise: responses } }) => responses) : [],
  );

  const {
    data: candidate,
    hasNextPage: hasNextPageC,
    isFetching: isFetchingC,
    fetchNextPage: fetchNextPageC,
    refetch: refetchC,
  } = useGetProportionalCandidate(id);
  const [candidateList, setCandidateList] = useState(
    candidate
      ? candidate.pages.flatMap(({ data: { proportional_candidate_list_dto_list: responses } }) => responses)
      : [],
  );

  const fetchRefP = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPageP && !isFetchingP) {
      fetchNextPageP();
    }
  });

  const fetchRefC = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPageC && !isFetchingC) {
      fetchNextPageC();
    }
  });

  useEffect(() => {
    if (promise) {
      setPromiseList(() => [...promise.pages.flatMap(({ data: { party_promise: responses } }) => responses)]);
    }
  }, [promise]);

  useEffect(() => {
    if (candidate) {
      setCandidateList(() => [
        ...candidate.pages.flatMap(({ data: { proportional_candidate_list_dto_list: responses } }) => responses),
      ]);
    }
  }, [candidate]);

  useEffect(() => {
    refetchP();
    refetchC();
  }, [type]);

  return (
    <div>
      <ProportionalPartyDetail partyId={id} />

      <br />

      <ProportionalTab type={type as any} clickHandler={setType as any} />

      <section className="flex flex-col mx-5 my-5 gap-5">
        {type === '정당 공약' ? (
          <PromiseList promiseList={promiseList} isFetching={isFetchingP} fetchRef={fetchRefP} />
        ) : (
          <CandidateList candidateList={candidateList} isFetching={isFetchingC} fetchRef={fetchRefC} />
        )}
      </section>
    </div>
  );
}
