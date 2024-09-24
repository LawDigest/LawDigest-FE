'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { IconSearchbar } from '@/public/svgs';
import { Button, Input } from '@nextui-org/react';
import { useResetRecoilState } from 'recoil';
import { searchModalState } from '@/store';
import { getCookie, setCookie } from 'cookies-next';

export default function SearchBar({
  setSearchWords,
}: {
  setSearchWords: Dispatch<SetStateAction<string[] | undefined>>;
}) {
  const router = useRouter();
  const [value, setValue] = useState('');
  const resetSearchModal = useResetRecoilState(searchModalState);

  const onSubmitSearch = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (value.trim() !== '') {
        const searchWords = getCookie('searchWords');
        if (searchWords?.split('/').find((v) => v === value.trim())) {
          setCookie(
            'searchWords',
            searchWords
              ?.split('/')
              .filter((v) => v !== value.trim())
              .concat([value.trim()])
              .join('/'),
          );
          setSearchWords(
            searchWords
              ?.split('/')
              .filter((v) => v !== value.trim())
              .concat([value.trim()]),
          );
        } else {
          setCookie('searchWords', searchWords ? searchWords.concat(`/${value.trim()}`) : value.trim());
          setSearchWords(searchWords?.split('/').concat([value.trim()]));
        }

        router.push(`/search/${value.trim()}`);
      } else {
        setValue('');
      }

      setValue('');
      resetSearchModal();
    },
    [value],
  );

  return (
    <form
      onSubmit={onSubmitSearch}
      className="w-full rounded-2xl flex justify-center items-center gap-[10px] md:w-[600px] mx-auto my-5">
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
