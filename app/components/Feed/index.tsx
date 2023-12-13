'use client';

import { Spinner } from '@nextui-org/spinner';
import { useMemo } from 'react';
import Bill from '@/components/Bill';
import { Button } from '@nextui-org/button';
import { DetailIcon } from '@/components/common/Icons';
import { useGetBills, useIntersect } from '@/hooks';
import Link from 'next/link';

export default function Feed() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBills();
  const bills = useMemo(
    () => (data ? data.pages.flatMap(({ result: { bills: responses } }) => responses) : []),
    [data],
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <div>
      {bills.map((bill) => (
        <Bill key={bill.bill_id} {...bill}>
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
