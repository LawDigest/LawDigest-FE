import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스크랩 페이지',
  description: '내가 스크랩한 내용을 자세히 확인할 수 있는 페이지',
};

export default function StatisticsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav logo>
      {children}
    </Layout>
  );
}
