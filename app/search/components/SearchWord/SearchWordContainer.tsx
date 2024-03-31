'use client';

import { useState, useCallback } from 'react';
import { Button } from '@nextui-org/button';
import SearchWordItem from './SearchWordItem';

interface SearchWordContainerProps {
  searchWordList: string[];
}

export default function SearchWordContainer({ searchWordList }: SearchWordContainerProps) {
  const [words, setWords] = useState(searchWordList);

  const handleClose = useCallback(
    (word: string) => {
      setWords(words.filter((value) => value !== word));
    },
    [words],
  );

  return (
    <div>
      {words.length === 0 ? (
        <p className="flex justify-center text-sm text-gray-2">최근 검색어가 없습니다.</p>
      ) : (
        <div>
          <Button size="sm" variant="light" radius="full" className="absolute right-0 text-sm -top-[52px] text-gray-2">
            모두 지우기
          </Button>
          <div className="flex gap-[10px] flex-wrap">
            {words.map((word) => (
              <SearchWordItem handleClose={handleClose} word={word} key={word} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
