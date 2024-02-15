'use client';

import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import Image from 'next/image';
import AddButon from '@/components/common/Button/AddButton';
import Slider from 'react-slick';

export default function MyPage() {
  const sliderSettings = {
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 2000,
    variableWidth: true,
  };

  return (
    <div className="flex flex-col gap-8 bg-[#F1F1F1] h-full">
      <section className="flex items-center px-[30px] justify-between h-[200px] shadow-md rounded-xl bg-white">
        <div className="flex items-center">
          <Avatar src="/images/basicAvatar.png" className="w-[100px] h-[100px] mr-4" />

          <div className="flex flex-col gap-3">
            <p className="text-3xl font-semibold">홍길동</p>
            <p className="text-[#999999] text-xs">abcd123@gmail.com</p>
          </div>
        </div>

        <Button
          radius="full"
          size="sm"
          variant="bordered"
          className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] ">
          로그아웃
        </Button>
      </section>

      <section className="pl-[30px]">
        <div className="flex items-center justify-between pr-[30px]">
          <p className="text-xl font-semibold">
            팔로우한 정당 &middot;<span className="text-[#555555]"> 3</span>
          </p>

          <AddButon />
        </div>

        <Slider {...sliderSettings}>
          <div className="bg-white w-[132px] h-[102px] rounded-lg ">
            <Image src="/mock/party/더불어민주당_로고.png" width={132} height={102} alt="더불어민주당 로고 이미지" />
          </div>
          <div className="bg-white w-[132px] h-[102px] rounded-lg ">
            <Image src="/mock/party/국민의힘_로고.png" width={132} height={102} alt="국민의힘 로고 이미지" />
          </div>
          <div className="bg-white w-[132px] h-[102px] rounded-lg ">
            <Image src="/mock/party/정의당_로고.png" width={132} height={102} alt="정의당 로고 이미지" />
          </div>
        </Slider>
      </section>

      <hr className="mx-[30px]" />

      <section className="px-[30px]">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">
            팔로우한 의원 &middot;<span className="text-[#555555]"> 13</span>
          </p>

          <AddButon />
        </div>
      </section>
    </div>
  );
}
