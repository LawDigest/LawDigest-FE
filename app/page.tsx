import { Feed, SearchBar, Layout } from '@/components';

export default function Home() {
  return (
    <Layout nav logo notification>
      <SearchBar />
      <Feed />
    </Layout>
  );
}
