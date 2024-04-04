'use client';

import { useEffect, useState, useCallback } from 'react';
import { useIntersect, useTabType } from '@/hooks';
import { BillList, StageTab } from '@/components/Bill';
import { IconControl } from '@/public/svgs';
import { Button } from '@nextui-org/react';
import { STAGE_TAB_KO } from '@/constants';
import { useGetBills, useGetBillByStage } from './apis';

export default function Feed() {
  const [stageType, setStageType] = useTabType<typeof STAGE_TAB_KO & '전체'>('전체');
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    stageType === '전체' ? useGetBills() : useGetBillByStage(stageType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bill_list: responses } }) => responses) : []);
  const [toggleFilter, setToggleFilter] = useState(false);

  const fetchRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const onClickFilter = useCallback(() => {
    setToggleFilter(!toggleFilter);
  }, [toggleFilter]);

  useEffect(() => {
    if (data) {
      setBills(() => [...data.pages.flatMap(({ data: { bill_list: responses } }) => responses)]);
    }
  }, [data]);

  useEffect(() => {
    setBills([]);
    refetch();
  }, [stageType]);

  return (
    <section>
      <section className="flex justify-end mx-5 my-5">
        <Button endContent={<IconControl />} className="text-sm font-medium bg-transparent " onClick={onClickFilter}>
          필터
        </Button>
      </section>
      {toggleFilter && <StageTab type={stageType as any} clickHandler={setStageType as any} />}
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </section>
  );
}
