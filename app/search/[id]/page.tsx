'use client';

import { useState, useEffect } from 'react';
import { SearchBar } from '@/components';
import { useIntersect } from '@/hooks';
import { useGetSearchCongressmanParty } from '../apis';
import { SearchList } from './components';

export default function SearchResult({ params: { id } }: { params: { id: string } }) {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetSearchCongressmanParty(decodeURI(id));
  const [searchResults, setSearchResults] = useState(
    data ? data.pages.flatMap(({ data: { search_response: responses } }) => responses) : [],
  );

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setSearchResults(() => [...data.pages.flatMap(({ data: { search_response: responses } }) => responses)]);
    }
  }, [data, decodeURI(id)]);

  useEffect(() => {
    refetch();
  }, [decodeURI(id)]);

  return (
    <>
      <SearchBar />
      <section className="mx-5">
        <p className="my-4 text-sm font-medium text-center text-gray-2">{`'${decodeURI(id)}'에 대한 검색결과입니다.`}</p>
        <SearchList searchResults={searchResults} isFetching={isFetching} fetchRef={fetchRef} />
      </section>
    </>
  );
}
