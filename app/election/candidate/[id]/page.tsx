'use client';

import { useSearchParams } from 'next/navigation';
import { CandidateProfile } from '../../components';

export default function Candidate({ params: { id } }: { params: { id: number } }) {
  const type = useSearchParams().get('type');

  return (
    <section className="my-5">
      <CandidateProfile candidateId={id} type={type} />
    </section>
  );
}
