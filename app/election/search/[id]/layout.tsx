import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '후보자 검색 페이지',
  description: '후보자 관련 검색결과를 자세히 확인할 수 있는 페이지',
};

export default function ElectionSearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav goBack>
      {children}
    </Layout>
  );
}
