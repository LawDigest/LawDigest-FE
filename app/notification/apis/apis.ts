import http from '@/api';
import { NotificationReadResponse, NotificationResponse, NotificationCountResponse } from '@/types';

export const getNotification = async () =>
  http.get<NotificationResponse>({
    url: `/notification/user`,
  });

export const getNotificationCount = async () =>
  http.get<NotificationCountResponse>({
    url: `/notification/user/count`,
  });

export const putNotificationRead = (notificationId: number) =>
  http.put<NotificationReadResponse>({
    url: `/notification/user/read`,
    params: { notification_id: notificationId },
  });

export const putNotificationReadAll = () =>
  http.put<NotificationReadResponse>({
    url: `/notification/user/read/all`,
  });

export const deleteNotificationAll = () =>
  http.delete({
    url: `/notification/user/delete/all`,
  });
