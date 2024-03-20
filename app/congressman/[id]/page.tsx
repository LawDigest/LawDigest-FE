'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { CongressmanComponent, BillContainer } from './components';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CongressmanComponent id={id} queryClient={queryClient} />
      <BillContainer id={id} />
    </HydrationBoundary>
  );
}
