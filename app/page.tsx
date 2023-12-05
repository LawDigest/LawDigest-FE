import SearchBar from '@/components/common/SearchBar';
import Feed from '@/components/Bill/Feed';
import BillNav from './components';

function Home() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-2 py-[10px] ">
      <SearchBar />
      <BillNav />
      <section className="w-full h-full flex-col">
        <Feed />
        <div className="w-full h-[8px] bg-[#E2E8F0] " />
      </section>
    </section>
  );
}

export default Home;
