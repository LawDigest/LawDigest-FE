import { BillResponse } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import { Bill } from '@/components';

export default function SearchBillList({
  bills,
  isFetching,
  fetchRef,
}: {
  bills: BillResponse[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {bills.length ? (
        bills.map((bill, index) => <Bill key={`${bill.bill_info_dto.bill_id + index}`} {...bill} detail={false} />)
      ) : (
        <p className="my-8 text-sm text-center text-gray-2">검샐 결과가 없습니다.</p>
      )}

      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </>
  );
}
