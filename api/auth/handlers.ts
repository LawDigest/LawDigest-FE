/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useRouter } from 'next/navigation';

export const handleSuccessReissueToken = () => {
  const router = useRouter();
  router.push('/');
};

export const handleFailReissueToken = () => {
  const router = useRouter();
  router.push('/login');
};
