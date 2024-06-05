import Link from 'next/link';

export default function AnotherBill({
  similarBills,
}: {
  similarBills: {
    billId: string;
    billName: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      {similarBills.map(({ billId, billName }) => (
        <Link
          href={`/bill/${billId}`}
          className=" h-10 bg-gray-1 dark:bg-dark-l dark:text-gray-2 rounded-[10px] text-xs truncate flex items-center p-3"
          key={billId}>
          <p className="truncate">{billName}</p>
        </Link>
      ))}
    </div>
  );
}
