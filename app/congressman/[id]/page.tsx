'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { CongressmanComponent, BillContainer } from './components';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CongressmanComponent congressmanId={id} queryClient={queryClient} />
      <BillContainer id={id} />
    </HydrationBoundary>
  );
}
