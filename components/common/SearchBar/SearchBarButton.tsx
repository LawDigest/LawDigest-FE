'use client';

import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { Button } from '@nextui-org/react';
import { searchModalState } from '@/store';

export default function SearchBarButton() {
  const setSearchModal = useSetRecoilState(searchModalState);

  const onClickSearchBar = useCallback(() => {
    setSearchModal({ show: true });
  }, []);

  return (
    <section className="w-full px-5 rounded-2xl flex justify-center items-center gap-[10px] md:w-[600px] mx-auto my-5">
      <Button
        onClick={onClickSearchBar}
        className="bg-[#F4F4F5] dark:bg-[#27272A] h-[40px] w-full shadow-sm flex flex-row justify-start">
        <p className="text-[#97979E]">법안, 의원, 정당명으로 검색</p>
      </Button>
    </section>
  );
}
