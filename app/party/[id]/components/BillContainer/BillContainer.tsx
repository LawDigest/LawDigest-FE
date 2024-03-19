'use client';

import { useState, useEffect } from 'react';
import { BillList } from '@/components/Bill';
import { useIntersect } from '@/hooks';
import { useGetBillByParty } from '../../apis';

export default function BillContainer({ id }: { id: number }) {
  const [billType, setBillType] = useState<boolean>(true);
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBillByParty(id, billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bill_list: responses } }) => responses) : []);

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setBills((prevBills) => [...prevBills, ...data.pages.flatMap(({ data: { bill_list: responses } }) => responses)]);
    }
  }, [data]);

  useEffect(() => {
    setBills([]);
    refetch();
  }, [billType]);

  return (
    <section>
      {/* <BillTab type={billType} clickHandler={setBillType as any} /> */}
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} congressman />
    </section>
  );
}
