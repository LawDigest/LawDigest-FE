import { BillProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import Bill from './Bill';

export default function BillList({
  bills,
  isFetching,
  fetchRef,
  detail,
  congressman,
}: {
  bills: BillProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
  detail?: boolean;
  congressman?: boolean;
}) {
  return (
    <>
      {bills.map((bill, index) => (
        <Bill key={`${bill.bill_info_dto.bill_id + index}`} {...bill} detail={detail} congressman={congressman} />
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
