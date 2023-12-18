'use client';

import { useState, useEffect } from 'react';
import { BillList, BillTab } from '@/components/Bill';
import { BILL_TAB_KO } from '@/constants';
import { useIntersect, useTabType } from '@/hooks';
import { useGetBillByCongressman } from './apis';
import CongressmanComponent from './Congressman/Congressman';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const { billType, setBillType } = useTabType<typeof BILL_TAB_KO>('대표발의한 법안');
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBillByCongressman(id, billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bills: responses } }) => responses) : []);
  const { congressman } = data.pages[0].data;

  const ref = useIntersect(async (entry, observer) => {
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
      <CongressmanComponent congressman={congressman} />
      <BillTab type={billType} clickHandler={setBillType as any} />
      <BillList bills={bills} isFetching={isFetching} fetchRef={ref} />
    </>
  );
}
