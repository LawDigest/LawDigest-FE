import type { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import { FEED_TAB } from '@/app/bill/[id]/constants/bill';
import type { BillResponse } from '@/app/bill/[id]/types';
import type { ValueOf } from '@/app/common/types';
import Bill from './Bill';

export default function BillList({
  bills,
  isFetching,
  fetchRef,
  detail,
  feedType,
}: {
  bills: BillResponse[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
  detail?: boolean;
  feedType?: ValueOf<typeof FEED_TAB>;
}) {
  return (
    <section className="xl:w-[840px]">
      {bills.map((bill, index) => (
        <Bill key={`${bill.bill_info_dto.bill_id + index}`} {...bill} detail={detail} />
      ))}
      {feedType === 'sorted_by_latest' && isFetching && (
        <div className="flex justify-center my-4 w-full">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      )}
      <div ref={fetchRef} />
    </section>
  );
}
