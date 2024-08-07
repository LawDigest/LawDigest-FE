import { BillResponse, ValueOf } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
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
    <>
      {bills.length === 0 ? (
        <p className="flex justify-center my-8 text-sm text-gray-2 dark:text-gray-3">
          발의한 법안이 존재하지 않습니다.
        </p>
      ) : (
        bills.map((bill, index) => <Bill key={`${bill.bill_info_dto.bill_id + index}`} {...bill} detail={detail} />)
      )}
      {feedType === 'sorted_by_latest' && isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </>
  );
}
