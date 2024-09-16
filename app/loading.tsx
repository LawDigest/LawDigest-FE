import { Layout } from '@/components/Layout';
import { Spinner } from '@nextui-org/spinner';
import Image from 'next/image';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Layout nav logo notification>
      <section className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/logo.svg"
          width={900}
          height={140}
          alt="500 에러 이미지"
          className="mb-[18px] md:mb-[50px] w-[269px] md:w-[900px] h-[46px] md:h-[140px]"
        />
        <h2 className="text-2xl md:text-[45px] font-extralight mb-[18px] md:mb-[28px]">AI 기반 입법정보 제공 플랫폼</h2>
        <Spinner size="lg" />
      </section>
    </Layout>
  );
}
