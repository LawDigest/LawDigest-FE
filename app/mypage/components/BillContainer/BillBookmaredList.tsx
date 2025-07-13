import { BillResponse } from '@/types';
import { RefObject } from 'react';
import { Loader2 } from 'lucide-react';
import BillBookmarked from './BillBookmarked';

export default function BillBookmarkedList({
  bills,
  isFetching,
  fetchRef,
}: {
  bills: BillResponse[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <ul className="flex flex-col gap-4 mx-[30px] lg:mx-0">
      {bills.map((bill, index) => (
        <BillBookmarked {...bill} key={`${bill.bill_info_dto.bill_id + index}`} />
      ))}
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Loader2 className="animate-spin" />
        </div>
      )}
      <div ref={fetchRef} />
    </ul>
  );
}
