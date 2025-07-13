'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { IconDarkMode, IconLightMode } from '@/public/svgs';

export default function ThemeSwitchButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      {theme === 'dark' ? <IconDarkMode /> : <IconLightMode />}
    </Button>
  );
}
