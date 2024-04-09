'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { useGetPropotionalPartyList } from '../../apis';
import PropotionalList from './PropotionalList';

export default function PropotionalContainer() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetPropotionalPartyList();
  const [partyList, setPartyList] = useState(
    data ? data.pages.flatMap(({ data: { proportional_party_logo_list_dto_list: responses } }) => responses) : [],
  );

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setPartyList(() => [
        ...data.pages.flatMap(({ data: { proportional_party_logo_list_dto_list: responses } }) => responses),
      ]);
    }
  }, [data]);

  return (
    <div>
      <PropotionalList partyList={partyList} isFetching={isFetching} fetchRef={fetchRef} />
    </div>
  );
}
