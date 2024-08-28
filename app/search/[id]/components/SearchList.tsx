import { SearchCongressmanPartyProps } from '@/types';
import SearchParty from './SearchParty';
import SearchCongressman from './SearchCongressman';

export default function SearchList({ searchResults }: { searchResults: SearchCongressmanPartyProps[] }) {
  return (
    <section className="mx-5 my-8">
      <div className={`flex flex-col gap-5 ${searchResults.length ? 'lg:grid lg:grid-cols-2' : ''} lg:gap-y-5 `}>
        {searchResults.map((searchResult, index) =>
          searchResult.search_type === 'PARTY' ? (
            <SearchParty key={`${searchResult.party_id + index}`} {...searchResult} />
          ) : (
            <SearchCongressman key={`${searchResult.congressman_id + index}`} {...searchResult} />
          ),
        )}
      </div>
    </section>
  );
}
