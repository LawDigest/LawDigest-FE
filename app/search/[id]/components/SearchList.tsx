import { SearchCongressmanPartyProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import SearchParty from './SearchParty';
import SearchCongressman from './SearchCongressman';

export default function SearchList({
  searchResults,
  isFetching,
  fetchRef,
}: {
  searchResults: SearchCongressmanPartyProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {searchResults.map((searchResult, index) =>
        searchResult.search_type === 'PARTY' ? (
          <SearchParty key={`${searchResult.party_id + index}`} {...searchResult} />
        ) : (
          <SearchCongressman key={`${searchResult.congressman_id + index}`} {...searchResult} />
        ),
      )}
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </>
  );
}
