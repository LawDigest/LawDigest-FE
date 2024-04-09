'use client';

import { useState, useEffect } from 'react';
import { useIntersect, useTabType } from '@/hooks';
import { PROPOTIONAL_TAB_KO } from '@/constants';
import { PropotionalPartyDetail, PropotionalTab, PromiseList } from '../../components';
import { useGetPropotionalPromise } from '../../apis';

export default function ElectionParty({ params: { id } }: { params: { id: number } }) {
  const [type, setType] = useTabType<typeof PROPOTIONAL_TAB_KO>('정당 공약');

  const {
    data: promise,
    hasNextPage: hasNextPageP,
    isFetching: isFetchingP,
    fetchNextPage: fetchNextPageP,
    refetch: refetchP,
  } = useGetPropotionalPromise(id);
  const [promiseList, setPromiseList] = useState(
    promise ? promise.pages.flatMap(({ data: { party_promise: responses } }) => responses) : [],
  );

  const fetchRefP = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPageP && !isFetchingP) {
      fetchNextPageP();
    }
  });

  useEffect(() => {
    if (promise) {
      setPromiseList(() => [...promise.pages.flatMap(({ data: { party_promise: responses } }) => responses)]);
    }
  }, [promise]);

  useEffect(() => {
    refetchP();
  }, [promise]);

  return (
    <div>
      <PropotionalPartyDetail partyId={id} />

      <br />

      <PropotionalTab type={type as any} clickHandler={setType as any} />

      <PromiseList promiseList={promiseList} isFetching={isFetchingP} fetchRef={fetchRefP} />
    </div>
  );
}
