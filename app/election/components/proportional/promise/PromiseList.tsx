import { ProportionalPromiseProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import PromiseItem from './PromiseItem';

export default function PromiseList({
  promiseList,
  isFetching,
  fetchRef,
}: {
  promiseList: ProportionalPromiseProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {promiseList.map((promise) => (
        <PromiseItem key={promise.party_promise_id} {...promise} />
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
