'use client';

import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
