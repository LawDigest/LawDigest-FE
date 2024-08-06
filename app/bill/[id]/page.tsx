'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { SubHeader } from '@/components';
import { BillContainer } from './components';

export default function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col">
        <SubHeader title="의안 자세히 보기" />
        <BillContainer id={id} />
      </section>
    </HydrationBoundary>
  );
}
