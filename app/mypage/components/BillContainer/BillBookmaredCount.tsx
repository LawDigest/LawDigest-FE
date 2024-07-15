import { useQueryClient } from '@tanstack/react-query';
import { useGetBillBookmarkedCount } from '../../apis';

export default async function BillBookmaredCount() {
  const queryClient = useQueryClient();
  const {
    data: { count: billCount },
  } = await useGetBillBookmarkedCount(queryClient);

  return <span className="text-[#555555] dark:text-gray-2">{billCount}</span>;
}
