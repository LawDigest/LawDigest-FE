'use client';

import SearchBar from '@/components/common/SearchBar';
import Feed from './components/Feed';
import BillNav from './components/BillNav';
import QueryProvider from './lib/query';

function Home() {
  return (
    <QueryProvider>
      <SearchBar />
      <BillNav />
      <Feed />
    </QueryProvider>
  );
}

export default Home;
