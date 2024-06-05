'use client';

import { IconArrowRight } from '@/public/svgs';
import { useSearchParams } from 'next/navigation';
import { CITY_NAME, GU_NAME, DISTRICT_NAME } from '@/constants';
import { getCookie } from 'cookies-next';
import { Button, Link as NextUILink } from '@nextui-org/react';
import { CityList, GuList, DistrictList, DistrictInfo } from '../components';

export default function ElectionDistrict() {
  const set = useSearchParams().get('set');
  const cityName = getCookie(CITY_NAME);
  const guName = getCookie(GU_NAME);
  const districtName = getCookie(DISTRICT_NAME);

  if (set === 'city') {
    return (
      <section className="flex flex-col mx-5 gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">내 지역구 선택</h2>
          <h3 className="text-xs text-gray-3">위치를 설정하고 내 지역구 정보를 한눈에 확인하세요!</h3>
        </div>

        <div className="flex h-[54px] bg-gray-0.5 rounded-full items-center justify-between px-10 text-lg font-semibold">
          <div className="text-gray-2">시 · 도 선택</div>
          <IconArrowRight />
          <div className="text-gray-1">구 · 시 · 군 선택</div>
        </div>

        <CityList />
      </section>
    );
  }

  if (set === 'gu') {
    return (
      <section className="flex flex-col mx-5 gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">내 지역구 선택</h2>
          <h3 className="text-xs text-gray-3">위치를 설정하고 내 지역구 정보를 한눈에 확인하세요!</h3>
        </div>

        <div className="flex h-[54px] bg-gray-0.5 rounded-full items-center justify-between px-10 text-lg font-semibold">
          <div className="text-gray-1">시 · 도 선택</div>
          <IconArrowRight />
          <div className="text-gray-2">구 · 시 · 군 선택</div>
        </div>

        <GuList />
      </section>
    );
  }

  if (set === 'district') {
    return (
      <section className="flex flex-col mx-5 gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">내 지역구 선택</h2>
          <h3 className="text-xs text-gray-3">위치를 설정하고 내 지역구 정보를 한눈에 확인하세요!</h3>
        </div>

        <div className="flex h-[54px] bg-gray-0.5 rounded-full items-center justify-between px-10 text-lg font-semibold">
          <div className="text-gray-1">시 · 도 선택</div>
          <IconArrowRight />
          <div className="text-gray-2">구 · 시 · 군 선택</div>
        </div>

        <DistrictList />
      </section>
    );
  }

  return cityName && guName && districtName ? (
    <div>
      <DistrictInfo />
    </div>
  ) : (
    <div className="flex justify-center">
      <Button
        as={NextUILink}
        href="/election/district?set=city"
        className="font-medium text-white rounded-full bg-primary-3">
        지역 설정하기
      </Button>
    </div>
  );
}
