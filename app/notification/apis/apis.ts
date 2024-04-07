import http from '@/api/config/core';
import { NotificationReadResponse, NotificationResponse } from '@/types';

export const getNotification = () =>
  http.get<NotificationResponse>({
    url: `/notification`,
  });

export const putNotificationRead = () =>
  http.put<NotificationReadResponse>({
    url: `/notification/read`,
  });
