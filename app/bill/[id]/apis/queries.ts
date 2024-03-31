'use clinet';

import { QueryClient } from '@tanstack/react-query';
import { getBillDetail } from './api';

export const useBillDetail = ({ id, queryClient }: { id: string; queryClient: QueryClient }) =>
  queryClient.fetchQuery({
    queryKey: ['/bill/detail', id],
    queryFn: () => getBillDetail({ id }),
  });

// export const usePatchViewCount = (id: string) =>
//   useMutation({
//     mutationKey: ['/bill/view_count', id],
//     mutationFn: () => patchViewCount(id),
//   });

// export const usePatchViewCount = async (id: string) => {
//   const response = await patchViewCount(id);

//   return response;
// };
