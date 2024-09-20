'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { snackbarState } from '@/store';
import { SearchBar } from '@/components';
import { FollowingNav, BillContainer } from './components';

export default function Following() {
  const router = useRouter();
  const accessToken = getCookie(ACCESS_TOKEN);
  const queryClient = useQueryClient();
  const setSnackbar = useSetRecoilState(snackbarState);

  useEffect(() => {
    if (!accessToken) {
      setSnackbar({ show: true, type: 'ERROR', message: '로그인이 필요한 서비스입니다.', duration: 3000 });
      router.push('/login');
    }
  }, [setSnackbar]);

  if (!accessToken) return <div className="flex items-center justify-center h-full">팔로잉 정보가 없습니다.</div>;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col mx-auto lg:flex-row lg:justify-center xl:justify-start">
        <FollowingNav />
        <div>
          <div className="hidden mt-11 lg:block">
            <SearchBar />
          </div>
          <BillContainer />
        </div>
      </section>
    </HydrationBoundary>
  );
}
