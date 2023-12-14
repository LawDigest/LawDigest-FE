'use clinet';

import { useQuery } from '@tanstack/react-query';
import { getBillDetail } from './api';

export const useBillDetail = ({ id }: { id: string }) =>
  useQuery({
    queryKey: ['/bill/detail', id],
    queryFn: () => getBillDetail({ id }),
    select: ({ data }) => data,
  });

// export const useBillDetail = ({ id, queryClient }: { id: number; queryClient: QueryClient }) =>
//   queryClient
//     .fetchQuery({
//       queryKey: ['/bill/detail', id],
//       queryFn: () => getBillDetail({ id }),
//     })
//     .then(({ data }) => data);
