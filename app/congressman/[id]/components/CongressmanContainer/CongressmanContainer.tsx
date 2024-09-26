'use client';

import CongressmanDetail from '../Congressman/CongressmanDetail';
import BillContainer from '../BillContainer';

export default function CongressmanContainer({ id }: { id: string }) {
  return (
    <div className="lg:flex lg:items-start lg:justify-center lg:gap-10">
      <CongressmanDetail congressmanId={id} />
      <BillContainer id={id} />
    </div>
  );
}
