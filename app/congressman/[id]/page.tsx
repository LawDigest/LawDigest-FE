'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
// import getQueryClient from '@/lib/getQueryClient';
// import { useGetCongressmanDetail } from './apis';
import { CongressmanComponent, BillContainer } from './components';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const queryClient = new QueryClient();
  // const { data: congressman } = await useGetCongressmanDetail({ id, queryClient });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CongressmanComponent id={id} queryClient={queryClient} />
      <BillContainer id={id} />
    </HydrationBoundary>
  );
}
