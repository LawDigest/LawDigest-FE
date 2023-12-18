'use client';

import { useEffect, useState } from 'react';
import { useGetBills, useIntersect, useTabType } from '@/hooks';
import { FEED_TAB_KO } from '@/constants';
import { BillList, BillTab } from '@/components/Bill';

export default function Feed() {
  const { billType, setBillType } = useTabType<typeof FEED_TAB_KO>('접수');
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBills(billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bills: responses } }) => responses) : []);

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setBills((prevBills) => [...prevBills, ...data.pages.flatMap(({ data: { bills: responses } }) => responses)]);
    }
  }, [data]);

  useEffect(() => {
    setBills([]);
    refetch();
  }, [billType]);

  return (
    <>
      <BillTab type={billType} clickHandler={setBillType as any} category="feed" />
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </>
  );
}
