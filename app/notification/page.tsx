'use client';

import { dehydrate, HydrationBoundary, useQueryClient } from '@tanstack/react-query';
import { NotificationList } from './components';

export default function Notification() {
  const queryClient = useQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotificationList queryClient={queryClient} />
    </HydrationBoundary>
  );
}
