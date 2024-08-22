'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { SubHeader } from '@/components';
import { PartyDetail, PartyCongressmanList, BillContainer } from './components';

export default function Party({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col gap-10">
        <SubHeader title="정당 프로필" />
        <div className="lg:flex lg:justify-center lg:gap-10">
          <div>
            <PartyDetail partyId={Number(id)} />
            <PartyCongressmanList id={Number(id)} />
          </div>
          <div className="">
            <BillContainer id={Number(id)} />
          </div>
        </div>
      </section>
    </HydrationBoundary>
  );
}
