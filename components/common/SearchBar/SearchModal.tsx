'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { searchModalState } from '@/store';
import { Button, Chip } from '@nextui-org/react';
import { IconX } from '@/public/svgs';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import SearchBar from './SearchBar';

export default function SearchModal() {
  const router = useRouter();
  const searchModal = useRecoilValue(searchModalState);
  const resetSearchModal = useResetRecoilState(searchModalState);
  const [searchWords, setSearchWords] = useState(getCookie('searchWords') ? getCookie('searchWords')?.split('/') : []);

  const closeModal = useCallback(() => {
    resetSearchModal();
  }, []);

  const onClickRemoveAll = useCallback(() => {
    setSearchWords([]);
    deleteCookie('searchWords');
  }, [searchWords]);

  const onClickChip = useCallback((searchWord: string) => {
    router.push(`/search/${searchWord}`);
    resetSearchModal();
  }, []);

  const onClickRemoveSearchWord = useCallback(
    (searchWord: string) => {
      setSearchWords(searchWords?.filter((v) => v !== searchWord));
      setCookie('searchWords', searchWords?.filter((v) => v !== searchWord).join('/'));

      if (searchWords?.filter((v) => v !== searchWord).length === 0) {
        deleteCookie('searchWords');
      }
    },
    [searchWords],
  );

  useEffect(() => {
    setSearchWords(getCookie('searchWords') ? getCookie('searchWords')?.split('/') : []);
  }, [searchModal]);

  useEffect(() => {
    if (searchWords && searchWords.length > 10) {
      setSearchWords(searchWords.slice(1));
      setCookie('searchWords', searchWords.slice(1).join('/'));
    }
  }, [searchWords]);

  return (
    <section
      className={`inset-0 w-full dark:bg-dark-b/80 bg-white/80 backdrop-blur-[10px] z-10 flex justify-center ${searchModal.show ? 'fixed' : 'hidden'}`}>
      <div className="mx-5 mt-10 md:mt-20 w-full md:w-[600px]">
        <div className="flex flex-col gap-4 md:relative">
          <div className="-right-20 md:absolute top-[22px]">
            <Button onClick={closeModal} className="float-right p-0 bg-transparent" size="sm" isIconOnly>
              <IconX />
            </Button>
          </div>
          <SearchBar setSearchWords={setSearchWords} />

          <section className="flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold md:text-xl">최근 검색어</h2>
              <Button
                size="sm"
                className="p-0 text-xs font-medium bg-transparent text-gray-2 md:text-sm"
                onClick={onClickRemoveAll}>
                모두 지우기
              </Button>
            </div>
            <div className="flex gap-[10px] flex-wrap">
              {searchWords && searchWords.length > 0 ? (
                searchWords.map((searchWord) => (
                  <Chip
                    key={searchWord}
                    variant="bordered"
                    className="h-7 md:h-8 border-gray-2 border-1 text-gray-3 dark:text-gray-2 dark:border-gray-3"
                    onClick={() => onClickChip(searchWord)}
                    onClose={() => {
                      onClickRemoveSearchWord(searchWord);
                    }}>
                    <p className="cursor-pointer">{searchWord}</p>
                  </Chip>
                ))
              ) : (
                <p className="text-sm text-gray-3 dark:text-gray-2">최근 검색어가 존재하지 않습니다.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
