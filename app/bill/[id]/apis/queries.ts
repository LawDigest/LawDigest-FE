import { useSuspenseQuery } from '@tanstack/react-query';
import { getBillDetail } from './api';

export const useBillDetail = ({ id }: { id: number }) =>
  useSuspenseQuery({ queryKey: ['/bill', id], queryFn: () => getBillDetail({ id }), select: ({ result }) => result });
