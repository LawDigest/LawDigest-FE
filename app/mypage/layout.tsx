import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마이 페이지',
  description: '내 정보를 자세히 확인할 수 있는 페이지',
};

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav logo notification>
      {children}
    </Layout>
  );
}
