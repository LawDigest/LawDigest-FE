import { SearchBillProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import SearchBill from './SearchBill';

export default function SearchBillList({
  bills,
  isFetching,
  fetchRef,
}: {
  bills: SearchBillProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {bills.map((bill, index) => (
        <SearchBill key={`${bill.id + index}`} {...bill} detail={false} congressman={false} />
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
