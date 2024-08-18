import { BillProps } from '@/types';
import { AnotherBill } from '.';

export default function AnotherBillList({ similar_bills }: BillProps) {
  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      {similar_bills.map((similarBill) => (
        <AnotherBill key={similarBill.billId} {...similarBill} />
      ))}
    </section>
  );
}
