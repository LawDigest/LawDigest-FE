import Layout from '@/components/common/Layout';
import SearchBar from '@/components/common/SearchBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '알림 페이지',
  description: '알림을 자세히 확인할 수 있는 페이지',
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout goBack>
      <SearchBar />
      {children}
    </Layout>
  );
}
