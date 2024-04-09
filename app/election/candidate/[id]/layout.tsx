import { Layout } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '선거 후보자 페이지',
  description: '선거 후보자 정보를 자세히 확인할 수 있는 페이지',
};

export default function ElectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav goBack notification title="후보자 프로필">
      {children}
    </Layout>
  );
}
