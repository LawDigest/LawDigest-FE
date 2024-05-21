'use client';

import { useState, useEffect } from 'react';
import { BillList, BillTab } from '@/components';
import { useIntersect, useTabType } from '@/hooks';
import { BILL_TAB } from '@/constants';
import { useGetBillByCongressman } from '../../apis';

export default function BillContainer({ id }: { id: string }) {
  const [billType, setBillType] = useTabType<typeof BILL_TAB>('represent_proposer');
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBillByCongressman(id, billType);
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
  }, [billType]);

  return (
    <section>
      <BillTab type={billType as any} clickHandler={setBillType as any} />
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} congressman />
    </section>
  );
}
