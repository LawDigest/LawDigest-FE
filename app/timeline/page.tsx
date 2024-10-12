'use client';

import { useGetTimelineFeed } from './apis/queries';

export default function Timeline() {
  const today = new Date().toISOString().split('T')[0];
  const { data } = useGetTimelineFeed('2024-09-30');

  return <div>{today}</div>;
}
