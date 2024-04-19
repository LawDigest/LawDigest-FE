import '@/styles/globals.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import clsx from 'clsx';
import { Suspense } from 'react';
import { QueryClientProvider, NextUIProvider } from '@/lib/provider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-white text-black font-sans antialiased', fontSans.variable)}>
        <NextUIProvider>
          <QueryClientProvider>
            <div className="relative flex flex-col h-screen">
              <main className="flex items-center justify-center w-full h-full">
                <Suspense fallback={<div>로딩...</div>}>{children}</Suspense>
              </main>
            </div>
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

export default RootLayout;
