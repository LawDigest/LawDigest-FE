import { Metadata } from 'next';
import { Layout } from '@/components';

export const metadata: Metadata = {
  title: '회원가입 페이지',
  description: '회원가입 페이지',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout nav theme>
      <section className="w-full h-full flex flex-col items-center sm:w-[430px] md:h-[788px]">
        <section className="w-full h-full overflow-scroll gap-2 py-[10px]">{children}</section>
      </section>
    </Layout>
  );
}
