import SearchBar from '@/components/common/SearchBar';
import Layout from '@/components/common/Layout';
import Feed from './components/Feed';

export default function Home() {
  return (
    <Layout logo setting={false}>
      <SearchBar />
      <Feed />
    </Layout>
  );
}
