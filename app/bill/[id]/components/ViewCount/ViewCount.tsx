'use client';

// import { useEffect } from 'react';
// import { usePatchViewCount } from '../../apis';

export default function ViewCount({ id }: { id: string }) {
  // useEffect(() => {
  //   const response = usePatchViewCount(id);
  //   console.log(response);
  // }, []);

  return <div>{id}</div>;
}
