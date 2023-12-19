import Layout from '@/components/common/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입 페이지',
  description: '회원가입 페이지',
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
