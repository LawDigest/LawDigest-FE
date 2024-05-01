import http from '@/api';
import { NotificationReadResponse, NotificationResponse } from '@/types';

export const getNotification = () =>
  http.get<NotificationResponse>({
    url: `/notification/user`,
  });

export const putNotificationRead = () =>
  http.put<NotificationReadResponse>({
    url: `/notification/user/read`,
  });
