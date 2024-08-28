'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { Input } from '@nextui-org/input';
import { IconSearchbar } from '@/public/svgs';
import { Button } from '@nextui-org/react';

export default function SearchBar() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onSubmitSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (value.trim() !== '') router.push(`/search/${value.trim()}`);
      else setValue('');
    },
    [value],
  );

  return (
    <form
      onSubmit={onSubmitSearch}
      className="w-full px-5 rounded-2xl flex justify-center items-center gap-[10px] lg:w-[600px] mx-auto my-5">
      <Input
        value={value}
        onValueChange={setValue}
        onClear={() => router.push('/search')}
        isClearable
        radius="lg"
        classNames={{
          input: ['bg-transparent', 'text-black/90', 'truncate'],
          inputWrapper: [
            'h-[40px]',
            'w-full',
            'shadow-sm',
            'group-data-[focused=true]:bg-default-200/50',
            '!cursor-text',
            'pt-2.5',
          ],
        }}
        placeholder="법안, 의원, 정당명으로 검색"
        endContent={
          <Button size="sm" isIconOnly className="bg-transparent" onClick={onSubmitSearch}>
            <IconSearchbar />
          </Button>
        }
      />
    </form>
  );
}
