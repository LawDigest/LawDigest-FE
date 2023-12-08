import Bill from '@/components/Bill';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/getQueryClient';
import { useBillDetail } from './apis';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  const bill = await useBillDetail({ id: Number(id), queryClient });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <Bill {...bill} />
      </section>
    </HydrationBoundary>
  );
}
