'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { useGetPartyCongressman } from '@/app/party/[id]/apis';
import { Spinner } from '@nextui-org/spinner';
import PartyCongressmanCard from './PartyCongressmanCard';

export default function PartyCongressman({ id }: { id: number }) {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetPartyCongressman(id);
  const [congressmen, setCongressmen] = useState(
    data ? data.pages.flatMap(({ data: { party_congressman: responses } }) => responses) : [],
  );

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setCongressmen(() => [...data.pages.flatMap(({ data: { party_congressman: responses } }) => responses)]);
    }
  }, [data]);

  return (
    <section className="mx-5 my-10">
      <div className="w-full grid grid-cols-4 justify-items-center gap-y-3 ">
        {congressmen.map((congressman, index) => (
          <PartyCongressmanCard key={`${congressman.congressman_id + index}`} {...congressman} />
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </section>
  );
}
