import { SubHeader } from '@/components';
import { BillContainer } from './components';
import { usePatchViewCount } from './apis';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const viewCount = await usePatchViewCount(id).then((res) => res.data.view_count);

  return (
    <section className="flex flex-col">
      <SubHeader title="의안 자세히 보기" />
      <BillContainer id={id} viewCount={viewCount} />
    </section>
  );
}
