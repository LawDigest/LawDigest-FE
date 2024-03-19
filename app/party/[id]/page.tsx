'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import PartyDetail from './components/PartyDetail/PartyDetail';

export default function Party({ params: { id } }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PartyDetail id={id} queryClient={queryClient} />
    </HydrationBoundary>
  );
}
