import { BillProps } from '@/types';
import { RefObject } from 'react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { DetailIcon } from '@/components/common/Icons';
import { Spinner } from '@nextui-org/spinner';
import Bill from './Bill';

export default function BillList({
  bills,
  isFetching,
  fetchRef,
}: {
  bills: BillProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {bills.map((bill, index) => (
        <Bill key={`${bill.bill_info_dto.bill_id + index.toString()}`} {...bill} divide>
          <Link href={`/bill/${bill.bill_info_dto.bill_id}`}>
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
      <div ref={fetchRef} />
    </>
  );
}
