'use client';

import { Spinner } from '@nextui-org/spinner';
import { useEffect, useState } from 'react';
import Bill from '@/components/Bill';
import { Button } from '@nextui-org/button';
import { DetailIcon } from '@/components/common/Icons';
import { useGetBills, useIntersect, useTabType } from '@/hooks';
import Link from 'next/link';
import { FEED_TAB_KO } from '@/constants';
import BillTab from '@/components/BillTab';

export default function Feed() {
  const { billType, setBillType } = useTabType<typeof FEED_TAB_KO>('접수');
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBills(billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bills: responses } }) => responses) : []);

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
    <div>
      <BillTab type={billType} clickHandler={setBillType as any} category="feed" />
      {bills.map((bill) => (
        <Bill key={bill.bill_id} {...bill} divide>
          <Link href={`/${bill.bill_id}`}>
            <Button
              className="mt-[20px] w-full h-[28px] font-semibold flex justify-center gap-[10px]"
              color="primary"
              size="sm"
              variant="flat">
              자세히보기
              <DetailIcon color="#006FEE" />
            </Button>
          </Link>
        </Bill>
      ))}
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={ref} />
    </div>
  );
}
