'use client';

import { useCallback } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { searchModalState } from '@/store';
import { Button } from '@nextui-org/react';
import { IconX } from '@/public/svgs';
import SearchBar from './SearchBar';

export default function SearchModal() {
  const searchModal = useRecoilValue(searchModalState);
  const resetSearchModal = useResetRecoilState(searchModalState);

  const closeModal = useCallback(() => {
    resetSearchModal();
  }, []);

  return (
    <section
      className={`inset-0 w-full bg-white/80 backdrop-blur-[10px] z-100 flex justify-center ${searchModal.show ? 'fixed' : 'hidden'}`}>
      <div className="mx-5 mt-10 md:mt-20 w-full max-w-[400px] md:max-w-[600px]">
        <div className="flex flex-col gap-4 md:flex-row-reverse md:items-center">
          <div>
            <Button onClick={closeModal} className="float-right p-0 bg-transparent" size="sm" isIconOnly>
              <IconX />
            </Button>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
