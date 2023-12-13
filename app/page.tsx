'use client';

import SearchBar from '@/components/common/SearchBar';
import Feed from './components/Feed';
import BillNav from './components/BillNav';

function Home() {
  return (
    <>
      <SearchBar />
      <BillNav />
      <Feed />
    </>
  );
}

export default Home;
