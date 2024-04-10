import { SearcHCandidateProps } from '@/types';
import { RefObject } from 'react';
import { Spinner } from '@nextui-org/spinner';
import SearchItem from './SearchItem';

export default function SearchList({
  searchResults,
  isFetching,
  fetchRef,
}: {
  searchResults: SearcHCandidateProps[];
  isFetching: boolean;
  fetchRef: RefObject<HTMLDivElement>;
}) {
  return (
    <section>
      <div className="flex flex-col gap-5">
        {searchResults.map((searchResult) => (
          <SearchItem key={searchResult.candidate_id} {...searchResult} />
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </section>
  );
}
