'use client';

import { useState, useEffect } from 'react';
import { BillList, SearchBar } from '@/components';
import { useIntersect, useTabType } from '@/hooks';
import { SEARCH_TAB_KO } from '@/constants';
import { useGetSearchCongressmanParty, useGetSearchBill } from '../apis';
import { SearchList, SearchTab } from './components';

export default function SearchResult({ params: { id } }: { params: { id: string } }) {
  const [searchType, setSearchType] = useTabType<typeof SEARCH_TAB_KO>('법안');
  const {
    data: dataCP,
    hasNextPage: hasNextPageCP,
    isFetching: isFetchingCP,
    fetchNextPage: fetchNextPageCP,
    refetch: refetchCP,
  } = useGetSearchCongressmanParty(decodeURI(id));
  const {
    data: dataBill,
    hasNextPage: hasNextPageBill,
    isFetching: isFetchingBill,
    fetchNextPage: fetchNextPageBill,
    refetch: refetchBill,
  } = useGetSearchBill(decodeURI(id));
  const [searchResultsCP, setSearchResultsCP] = useState(
    dataCP ? dataCP.pages.flatMap(({ data: { search_response: responses } }) => responses) : [],
  );
  const [searchResultsBill, setSearchResultsBill] = useState(
    dataBill ? dataBill.pages.flatMap(({ data: { search_response: responses } }) => responses) : [],
  );

  const fetchRefCP = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPageCP && !isFetchingCP) {
      fetchNextPageCP();
    }
  });

  const fetchRefBill = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPageBill && !isFetchingBill) {
      fetchNextPageBill();
    }
  });

  useEffect(() => {
    if (dataCP) {
      setSearchResultsCP(() => [...dataCP.pages.flatMap(({ data: { search_response: responses } }) => responses)]);
    }
    if (dataBill) {
      setSearchResultsBill(() => [...dataBill.pages.flatMap(({ data: { search_response: responses } }) => responses)]);
    }
  }, [dataCP, dataBill]);

  useEffect(() => {
    refetchBill();
    refetchCP();
  }, [dataCP, dataBill]);

  return (
    <>
      <SearchBar isElection={false} />
      <section className="lg:w-[840px] mx-auto">
        <p className="my-4 text-sm font-medium text-center text-gray-2">{`'${decodeURI(id)}'에 대한 검색결과입니다.`}</p>
        <div className="mb-10">
          <SearchTab type={searchType as any} clickHandler={setSearchType as any} />
          {searchType === '법안' ? (
            <BillList bills={searchResultsBill} isFetching={isFetchingBill} fetchRef={fetchRefBill} detail={false} />
          ) : (
            <SearchList searchResults={searchResultsCP} isFetching={isFetchingCP} fetchRef={fetchRefCP} />
          )}
        </div>
      </section>
    </>
  );
}
