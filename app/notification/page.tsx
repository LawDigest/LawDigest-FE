'use client';

import { useEffect } from 'react';
import { NotificationList } from './components';
import { putNotificationRead } from './apis';

export default function Notification() {
  useEffect(() => {
    putNotificationRead();
  }, []);

  return (
    <section className="lg:max-w-[840px] mx-auto">
      <NotificationList />
    </section>
  );
}
