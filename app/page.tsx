import SearchBar from '@/components/common/SearchBar';
import Feed from '@/components/Bill/Feed';
import BillNav from './components';

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
