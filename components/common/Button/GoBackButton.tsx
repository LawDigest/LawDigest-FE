'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@/public/svgs';

export default function GoBackButton() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      <IconArrowLeft />
    </Button>
  );
}
