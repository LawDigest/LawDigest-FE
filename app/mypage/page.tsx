'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AddButon from '@/components/common/Button/AddButton';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { CongressmanList, UserInfo, PartyList } from './components';

const congressmanList = [
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
  {
    avatar_src: '/mock/avatar/avatar.png',
    party_label: '더불어민주당',
    name: '홍길동',
  },
];

export default function MyPage() {
  const router = useRouter();
  const accessToken = getCookie(ACCESS_TOKEN);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  }, []);

  if (!accessToken) return <div className="flex items-center justify-center h-full">회원 정보가 없습니다.</div>;

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col h-full gap-8">
        <UserInfo queryClient={queryClient} />

        <PartyList qeuryClient={queryClient} />

        <hr className="mx-[30px] bg-[#E0E0E0]" />

        <section className="px-[30px] flex flex-col gap-6 pb-10">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">
              팔로우한 의원 &middot;<span className="text-[#555555]"> 16</span>
            </p>

            <AddButon />
          </div>

          <CongressmanList congressmanList={congressmanList} />
        </section>
      </div>
    </HydrationBoundary>
  );
}
