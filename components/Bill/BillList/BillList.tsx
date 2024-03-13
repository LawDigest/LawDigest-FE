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
      {bills.map((bill) => (
        <Bill key={`${bill.bill_info_dto.bill_id}`} {...bill} />
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
