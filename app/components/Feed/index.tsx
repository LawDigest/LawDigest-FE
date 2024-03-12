'use client';

import { useEffect, useState } from 'react';
import { useGetBills, useIntersect } from '@/hooks';
// import { useTabType } from '@/hooks';
// import { FEED_TAB_KO } from '@/constants';
// import BillTab from '@/components/Bill';
import { BillList } from '@/components/Bill';

export default function Feed() {
  // const { billType, setBillType } = useTabType<typeof FEED_TAB_KO>('접수');
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBills();
  // const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBills(billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bill_list: responses } }) => responses) : []);

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      const curBills = data.pages.flatMap(({ data: { bill_list: responses } }) => responses);

      setBills((prevBills) => [...prevBills, ...curBills]);
    }
    // refetch();
  }, [data]);

  // useEffect(() => {
  //   setBills([]);
  //   refetch();
  // }, [billType]);

  return (
    <>
      {/* <BillTab type={billType} clickHandler={setBillType as any} category="feed" /> */}
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </>
  );
}
