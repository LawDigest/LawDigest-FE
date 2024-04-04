'use client';

import { useEffect, useState } from 'react';
import { useGetBills, useIntersect } from '@/hooks';
import { BillList } from '@/components/Bill';

export default function Feed() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBills();
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bill_list: responses } }) => responses) : []);

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setBills(() => [...data.pages.flatMap(({ data: { bill_list: responses } }) => responses)]);
    }
  }, [data]);

  return <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />;
}
