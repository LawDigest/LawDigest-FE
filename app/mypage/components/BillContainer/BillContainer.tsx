'use client';

import { useState, useEffect } from 'react';
import { BillList } from '@/components';
import { useIntersect } from '@/hooks';
import { useGetBillBookmarked } from '../../apis';

export default function BillContainer() {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBillBookmarked();
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bill_list: responses } }) => responses) : []);

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
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

  useEffect(() => {
    setBills([]);
    refetch();
  }, []);

  return (
    <section className="lg:px-[30px] flex flex-col gap-6">
      <p className="text-xl font-semibold px-[30px] lg:px-0">
        스크랩한 법안 &middot;<span className="text-[#555555] dark:text-gray-2"> {bills.length}</span>
      </p>
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </section>
  );
}
