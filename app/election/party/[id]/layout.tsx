import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '선거 관련 정당 페이지',
  description: '정당의 선거와 관련된 정보를 자세히 확인할 수 있는 페이지',
};

export default function ElectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav logo notification title="정당 페이지">
      {children}
    </Layout>
  );
}
