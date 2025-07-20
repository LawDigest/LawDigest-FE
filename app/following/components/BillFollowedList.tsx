import type { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import { Bill } from '@/app/bill/[id]/components';
import type { BillResponse } from '@/app/bill/[id]/types';

export default function BillFollowedList({
  bills,
  isFetching,
  fetchRef,
}: {
  bills: BillResponse[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {bills.map((bill) => (
        <Bill {...bill} key={bill.bill_info_dto.bill_id} />
      ))}
      {isFetching && (
        <div className="flex justify-center my-4 w-full">
          <Loader2 className="animate-spin" />
        </div>
      )}
      <div ref={fetchRef} />
    </ul>
  );
}
