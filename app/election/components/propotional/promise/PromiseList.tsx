import { PropotionalPromiseProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import PromiseItem from './PromiseItem';

export default function PromiseList({
  promiseList,
  isFetching,
  fetchRef,
}: {
  promiseList: PropotionalPromiseProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <section className="flex flex-col gap-5 mx-5 my-5">
        {promiseList.map((promise) => (
          <PromiseItem key={promise.party_promise_id} {...promise} />
        ))}
      </section>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </>
  );
}
