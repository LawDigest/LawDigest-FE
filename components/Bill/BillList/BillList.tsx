import { BillResponse, ValueOf } from '@/types';
import { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import { FEED_TAB } from '@/constants';
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
        <div className="flex justify-center w-full my-4">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )}
      <div ref={fetchRef} />
    </section>
  );
}
