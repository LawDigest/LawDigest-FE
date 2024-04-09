import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import { ProportionalPartyListProps } from '@/types';
import ProportionalItem from './ProportionalItem';

export default function ProportionalList({
  partyList,
  isFetching,
  fetchRef,
}: {
  partyList: ProportionalPartyListProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div>
      <div className="flex flex-col gap-[14px]">
        {partyList.map((party) => (
          <ProportionalItem key={party.party_id} {...party} />
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
