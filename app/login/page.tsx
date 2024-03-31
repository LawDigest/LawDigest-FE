'use client';

import { Logo } from '@/components/common/Header';
import { Button, Link as NextUILink } from '@nextui-org/react';
import Image from 'next/image';

export default function Login() {
  return (
    <section className="w-[90%] mx-auto h-full flex flex-col justify-center items-center gap-20">
      <Logo width={222} height={37} />

      <Button
        as={NextUILink}
        href={`${process.env.NEXT_PUBLIC_URL}oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}
        variant="bordered"
        radius="full"
        startContent={<Image src="/images/kakao.svg" width={22} height={22} alt="카카오톡 로고 이미지" />}
        className="w-full h-[58px] bg-transparent border-gray-2 border-[1px]">
        카카오톡으로 시작하기
      </Button>
    </section>
  );
}
