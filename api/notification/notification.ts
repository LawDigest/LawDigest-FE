import http from '@/api/config/core';
import { NotificationResponse } from '@/types';

export const getNotification = async () =>
  http.get<NotificationResponse>({
    url: `/notification`,
  });
