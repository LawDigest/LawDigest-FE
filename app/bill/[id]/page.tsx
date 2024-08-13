import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { SubHeader } from '@/components';
import getQueryClient from '@/lib/getQueryClient';
import { BillContainer } from './components';
import { prefetchGetBillDetail, usePatchViewCount } from './apis';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  await prefetchGetBillDetail(id, queryClient);
  const viewCount = await usePatchViewCount(id).then((res) => res.data.view_count);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col">
        <SubHeader title="의안 자세히 보기" />
        <BillContainer id={id} viewCount={viewCount} />
      </section>
    </HydrationBoundary>
  );
}
