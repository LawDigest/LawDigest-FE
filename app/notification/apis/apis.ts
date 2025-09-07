import { apiClient } from '@/app/common/lib/api';
import type { Notification } from '@/app/notification/types';

export const getNotification = async () => {
  try {
    const response = await apiClient.get<Notification[]>('/notification/user');
    return response.data;
  } catch (error) {
    console.error('getNotification error:', error);
    throw error;
  }
};

export const getNotificationCount = async () => {
  try {
    const response = await apiClient.get<{
      user_id: number;
      notification_count: number;
    }>('/notification/user/count');
    return response.data;
  } catch (error) {
    console.error('getNotificationCount error:', error);
    throw error;
  }
};

export const getNotificationTopThree = async () => {
  try {
    const response = await apiClient.get<Notification[]>('/notification/user/top3-unread');
    return response.data;
  } catch (error) {
    console.error('getNotificationTopThree error:', error);
    throw error;
  }
};

export const putNotificationRead = async (notificationId: number) => {
  try {
    const response = await apiClient.put<Notification[]>('/notification/user/read', {
      params: { notification_id: notificationId },
    });
    return response.data;
  } catch (error) {
    console.error('putNotificationRead error:', error);
    throw error;
  }
};

export const deleteNotification = async (notificationId: number) => {
  try {
    const response = await apiClient.delete<Notification[]>('/notification/user/delete', {
      params: { notification_id: notificationId },
    });
    return response.data;
  } catch (error) {
    console.error('deleteNotification error:', error);
    throw error;
  }
};

export const putNotificationReadAll = async () => {
  try {
    const response = await apiClient.put<Notification[]>('/notification/user/read/all');
    return response.data;
  } catch (error) {
    console.error('putNotificationReadAll error:', error);
    throw error;
  }
};

export const deleteNotificationAll = async () => {
  try {
    const response = await apiClient.delete<Notification[]>('/notification/user/delete/all');
    return response.data;
  } catch (error) {
    console.error('deleteNotificationAll error:', error);
    throw error;
  }
};
