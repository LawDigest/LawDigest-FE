'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
import { hideUrlBar } from '@/utils';

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  hideUrlBar();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return <Provider client={queryClient}>{children}</Provider>;
}
