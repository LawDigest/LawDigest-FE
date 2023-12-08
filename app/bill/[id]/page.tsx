import Bill from '@/components/Bill';
import { useBillDetail } from './apis';

export default function BillDetail({ params: { id } }: { params: { id: string } }) {
  const { data } = useBillDetail({ id: Number(id) })!;

  return (
    <section>
      <Bill {...data} />
    </section>
  );
}
