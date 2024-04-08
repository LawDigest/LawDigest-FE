'use client';

import { IconArrowRight } from '@/public/svgs';
import { useSearchParams } from 'next/navigation';
import { LocationSelect } from '../components';

export default function ElectionDistrict() {
  const mode = useSearchParams().get('set');

  if (mode === 'city') {
    return (
      <section className="flex flex-col gap-5 mx-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">내 지역구 선택</h2>
          <h3 className="text-xs text-gray-3">위치를 설정하고 내 지역구 정보를 한눈에 확인하세요!</h3>
        </div>

        <div className="flex h-[54px] bg-gray-0.5 rounded-full items-center justify-between px-10 text-lg font-semibold">
          <div className="text-gray-2">시 · 도 선택</div>
          <IconArrowRight />
          <div className="text-gray-1">구 · 시 · 군 선택</div>
        </div>

        <LocationSelect />
      </section>
    );
  }

  if (mode === 'gu') {
    return (
      <section className="flex flex-col gap-5 mx-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">내 지역구 선택</h2>
          <h3 className="text-xs text-gray-3">위치를 설정하고 내 지역구 정보를 한눈에 확인하세요!</h3>
        </div>

        <div className="flex h-[54px] bg-gray-0.5 rounded-full items-center justify-between px-10 text-lg font-semibold">
          <div className="text-gray-1">시 · 도 선택</div>
          <IconArrowRight />
          <div className="text-gray-2">구 · 시 · 군 선택</div>
        </div>
      </section>
    );
  }

  return <div>지역구 페이지</div>;
}
