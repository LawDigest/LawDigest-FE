'use client';

// eslint-disable-next-line
// @ts-ignore
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
