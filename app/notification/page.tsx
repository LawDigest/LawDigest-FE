'use client';

import { useEffect } from 'react';
import { NotificationList } from './components';
import { putNotificationRead } from './apis';

export default function Notification() {
  useEffect(() => {
    putNotificationRead();
  }, []);

  return <NotificationList />;
}
