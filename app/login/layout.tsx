import Layout from '@/components/common/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인 페이지',
  description: '로그인 페이지',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
