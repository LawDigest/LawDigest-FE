import Layout from '@/components/common/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '의안 자세히 보기',
  description: '의안을 자세히 확인할 수 있는 페이지',
};

export default function BillLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
