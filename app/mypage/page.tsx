'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { CongressmanList, UserInfo, PartyList } from './components';

export default function MyPage() {
  // const router = useRouter();
  const accessToken = getCookie(ACCESS_TOKEN);
  const queryClient = useQueryClient();

  // useEffect(() => {
  //   if (!accessToken) {
  //     router.push('/login');
  //   }
  // }, []);

  if (!accessToken) return <div className="flex items-center justify-center h-full">회원 정보가 없습니다.</div>;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col h-full gap-8">
        <UserInfo queryClient={queryClient} />
        <PartyList qeuryClient={queryClient} />
        <hr className="mx-[30px] bg-[#E0E0E0]" />
        <CongressmanList queryClient={queryClient} />
      </div>
    </HydrationBoundary>
  );
}
