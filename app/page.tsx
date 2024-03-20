import SearchBar from '@/components/common/SearchBar';
import Layout from '@/components/common/Layout';
import Feed from './components/Feed';

export default function Home() {
  return (
    <Layout nav logo notification>
      <SearchBar />
      <Feed />
    </Layout>
  );
}
