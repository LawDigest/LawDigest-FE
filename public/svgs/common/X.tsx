'use client';

import { useTheme } from 'next-themes';

export default function IconX() {
  const { theme } = useTheme();

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L21 21" stroke={theme === 'dark' ? '#999999' : 'black'} />
      <path d="M21 3L3 21" stroke={theme === 'dark' ? '#999999' : 'black'} />
    </svg>
  );
}
