'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AddButon from '@/components/common/Button/AddButton';
import Slider from 'react-slick';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { PartyItem, CongressmanList, UserInfo } from './components';

const partyList = [
  {
    label: '더불어민주당',
    src: '/mock/party/더불어민주당_로고.png',
  },
  {
    label: '국민의힘',
    src: '/mock/party/국민의힘_로고.png',
  },
  {
    label: '정의당',
    src: '/mock/party/정의당_로고.png',
  },
];

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
  const sliderSettings = {
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 2000,
    variableWidth: true,
  };

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

        <section className="pl-[30px] flex flex-col gap-6">
          <div className="flex items-center justify-between pr-[30px]">
            <p className="text-xl font-semibold">
              팔로우한 정당 &middot;<span className="text-[#555555]"> 3</span>
            </p>

            <AddButon />
          </div>

          <Slider {...sliderSettings}>
            {partyList.map((party) => (
              <PartyItem key={party.label} {...party} />
            ))}
          </Slider>
        </section>

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
