import { BillContainer } from '../components';

export default function PartyBill({ params: { id } }: { params: { id: string } }) {
  return <BillContainer id={Number(id)} />;
}
