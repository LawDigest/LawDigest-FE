'use client';

import { useState, useEffect } from 'react';
import { SearchBar } from '@/components';
import { useIntersect } from '@/hooks';
import { useGetSearchCandidate } from '../../apis';
import { SearchList } from '../../components';

export default function ElectionSearch({ params: { id } }: { params: { id: string } }) {
  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetSearchCandidate(decodeURI(id));
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
  }, [data]);

  useEffect(() => {
    refetch();
  }, [data]);

  return (
    <>
      <SearchBar isElection />
      <section>
        <p className="my-4 text-sm font-medium text-center text-gray-2">{`'${decodeURI(id)}'에 대한 검색결과입니다.`}</p>
        <div className="mx-5 mb-10">
          <SearchList searchResults={searchResults} isFetching={isFetching} fetchRef={fetchRef} />
        </div>
      </section>
    </>
  );
}
