'use client';

import { useSearchParams } from 'next/navigation';

export default function ElectionDistrict() {
  const mode = useSearchParams().get('mode');

  if (mode === 'setLocation') {
    return (
      <div>
        <div>지역 선택 페이지</div>
      </div>
    );
  }

  return <div>지역구 페이지</div>;
}
