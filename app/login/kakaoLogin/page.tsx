'use client';

import { useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { Logo } from '@/components/common/Header';
import { useRouter } from 'next/navigation';

export default function KaKaoLogin() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = new URL(window.location.href).searchParams.get('token');

    setCookie('accessToken', accessToken);

    router.push('/');
  }, [router]);

  return (
    <section className="w-[90%] mx-auto h-full flex flex-col justify-center items-center gap-20">
      <Logo width={222} height={37} />

      <p>로그인 중입니다.</p>
    </section>
  );
}
