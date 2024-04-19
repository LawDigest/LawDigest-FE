'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { CongressmanDetail, BillContainer } from './components';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CongressmanDetail congressmanId={id} />
      <BillContainer id={id} />
    </HydrationBoundary>
  );
}
