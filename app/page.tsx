import SearchBar from '@/components/common/SearchBar';
import Feed from '@/components/Bill/Feed';
import BillNav from './components';

function Home() {
  return (
    <>
      <SearchBar />
      <BillNav />
      <section className="flex-col w-full h-full overflow-scroll">
        <Feed />
      </section>
    </>
  );
}

export default Home;
