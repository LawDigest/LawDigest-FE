'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { useGetBillBookmarked } from '../../apis';
import BillBookmarkedCount from './BillBookmarkedCount';
import BillBookmarkedList from './BillBookmaredList';

export default function BillContainer() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBillBookmarked();
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

  return (
    <section className="lg:px-[30px] flex flex-col gap-6">
      <p className="text-xl font-semibold px-[30px] lg:px-0">
        스크랩한 법안 &middot; <BillBookmarkedCount />
      </p>
      <BillBookmarkedList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </section>
  );
}
