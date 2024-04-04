'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { PartyDetail, PartyCongressman } from './components';

export default function Party({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PartyDetail id={Number(id)} queryClient={queryClient} />
      <PartyCongressman id={Number(id)} />
    </HydrationBoundary>
  );
}
