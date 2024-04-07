'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { Input } from '@nextui-org/input';
import { IconSearchbar } from '@/public/svgs';

export default function SearchBar() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onSubmitSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      router.push(`/search/${value}`);
    },
    [value],
  );

  return (
    <form onSubmit={onSubmitSearch} className="w-full px-5 rounded-2xl flex justify-center items-center gap-[10px]">
      <Input
        value={value}
        onValueChange={setValue}
        onClear={() => router.push('/search')}
        isClearable
        radius="lg"
        classNames={{
          input: ['bg-transparent', 'text-black/90'],
          inputWrapper: [
            'h-[40px]',
            'w-full',
            'shadow-sm',
            'group-data-[focused=true]:bg-default-200/50',
            '!cursor-text',
            'pt-2.5',
          ],
        }}
        placeholder="궁금한 입법현황을 검색해 보세요."
        startContent={<IconSearchbar />}
      />
    </form>
  );
}
