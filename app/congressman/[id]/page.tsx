'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { SubHeader } from '@/components';
import { CongressmanDetail, BillContainer } from './components';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col gap-10">
        <SubHeader title="의원 프로필" />
        <div className="lg:flex lg:justify-center lg:gap-10">
          <CongressmanDetail congressmanId={id} />
          <BillContainer id={id} />
        </div>
      </section>
    </HydrationBoundary>
  );
}
