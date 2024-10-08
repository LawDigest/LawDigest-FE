'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getNotification,
  getNotificationCount,
  putNotificationRead,
  putNotificationReadAll,
  deleteNotificationAll,
} from './apis';

export const useGetNotification = () =>
  useQuery({
    queryKey: ['/notification/user'],
    queryFn: () => getNotification(),
  });

export const useGetNotificationCount = () =>
  useQuery({
    queryKey: ['/notification/user/count'],
    queryFn: () => getNotificationCount(),
  });

export const usePutNotificationRead = (notificationId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['/notification/user/read'],
    mutationFn: () => putNotificationRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/notification/user'] });
      queryClient.invalidateQueries({ queryKey: ['/notification/user/count'] });
    },
  });
};

export const usePutNotificationReadAll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['/notification/user/read/all'],
    mutationFn: () => putNotificationReadAll(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/notification/user'] });
      queryClient.invalidateQueries({ queryKey: ['/notification/user/count'] });
    },
  });
};

export const useDeleteNotificationAll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['/notification/user/delete/all'],
    mutationFn: () => deleteNotificationAll(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/notification/user'] });
      queryClient.invalidateQueries({ queryKey: ['/notification/user/count'] });
    },
  });
};
