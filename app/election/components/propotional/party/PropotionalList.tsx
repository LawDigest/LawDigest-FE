import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import { PropotionalPartyListProps } from '@/types';
import PropotionalItem from './PropotionalItem';

export default function PropotionalList({
  partyList,
  isFetching,
  fetchRef,
}: {
  partyList: PropotionalPartyListProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div>
      <div className="flex flex-col gap-[14px]">
        {partyList.map((party) => (
          <PropotionalItem key={party.party_id} {...party} />
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </div>
  );
}
