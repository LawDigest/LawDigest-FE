'use client';

import { useSearchParams } from 'next/navigation';
import { PropotionalPartyDetail } from '../../components';

export default function ElectionParty({ params: { id } }: { params: { id: number } }) {
  const type = useSearchParams().get('type');

  return (
    <div>
      <PropotionalPartyDetail partyId={id} />

      <br />
    </div>
  );
}
