'use client';

import { useEffect, useState, useMemo } from 'react';
import { useIntersect } from '@/hooks';
import { BillList } from '@/components/Bill';
import { useGetBills, useGetBillByStage } from './apis';
import StageDropdown from '../StageDropdown';

export default function Feed() {
  const [stageType, setStageType] = useState(new Set(['전체']));
  const selectedStageType = useMemo(() => Array.from(stageType).join(', ').replaceAll('_', ' '), [stageType]);
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    selectedStageType === '전체' ? useGetBills() : useGetBillByStage(selectedStageType);
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
  }, [selectedStageType]);

  return (
    <section>
      <section className="flex justify-end mx-5 mt-5">
        <StageDropdown type={selectedStageType as any} clickHandler={setStageType as any} />
      </section>
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </section>
  );
}
