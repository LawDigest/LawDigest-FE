import { QueryClient } from '@tanstack/react-query';
import { getBillDetail } from './api';

export const useBillDetail = ({ id, queryClient }: { id: number; queryClient: QueryClient }) =>
  queryClient
    .fetchQuery({
      queryKey: ['/bill/mainfeed', id],
      queryFn: () => getBillDetail({ id }),
    })
    .then(({ result }) => result);
