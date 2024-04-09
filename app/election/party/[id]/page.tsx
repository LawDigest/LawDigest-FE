'use client';

import { useSearchParams } from 'next/navigation';

export default function ElectionParty({ params: { id } }: { params: { id: string } }) {
  const type = useSearchParams().get('type');

  return (
    <div>
      <div>dd</div>
    </div>
  );
}
