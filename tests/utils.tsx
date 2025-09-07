import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'next-themes';

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });
}

export function renderWithProviders(ui: React.ReactElement, options?: RenderOptions) {
  const queryClient = createTestQueryClient();

  function AllProviders({ children }: { children: React.ReactNode }) {
    return (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    );
  }

  return render(ui, { wrapper: AllProviders, ...options });
}
