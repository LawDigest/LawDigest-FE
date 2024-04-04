'use client';

import { useEffect, useState, useCallback } from 'react';
import { useGetBills, useIntersect } from '@/hooks';
import { BillList, StageTab } from '@/components/Bill';
import { IconControl } from '@/public/svgs';
import { Button } from '@nextui-org/react';

export default function Feed() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBills();
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

  return (
    <section>
      <section className="flex justify-end mx-5 my-5">
        <Button endContent={<IconControl />} className="text-sm font-medium bg-transparent " onClick={onClickFilter}>
          필터
        </Button>
      </section>
      {toggleFilter && <StageTab />}
      <BillList bills={bills} isFetching={isFetching} fetchRef={fetchRef} />
    </section>
  );
}
