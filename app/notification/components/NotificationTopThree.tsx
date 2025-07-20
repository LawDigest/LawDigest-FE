'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/app/common/components/ui/button';
import { Separator } from '@/app/common/components/ui/separator';
import { useSetRecoilState } from 'recoil';
import { snackbarState } from '@/app/common/store';
import { SNACKBAR_TYPE } from '@/app/common/constants';
import {
  useGetNotificationTopThree,
  usePutNotificationRead,
  useDeleteNotification,
  useGetNotificationCount,
} from '../apis';
import NotificationItem from './NotificationItem';

export default function NotificationTopThree() {
  const { data: notifications, isLoading } = useGetNotificationTopThree();
  const { data: notificationCount } = useGetNotificationCount();
  const setSnackbar = useSetRecoilState(snackbarState);

  const mutateRead = usePutNotificationRead({
    onSuccess: () => {
      setSnackbar({
        show: true,
        type: SNACKBAR_TYPE.SUCCESS,
        message: '해당 알림을 읽었습니다.',
        duration: 3000,
      });
    },
    onError: () => {
      setSnackbar({
        show: true,
        type: SNACKBAR_TYPE.ERROR,
        message: '알림 읽기에 실패했습니다.',
        duration: 3000,
      });
    },
  });

  const mutateDelete = useDeleteNotification({
    onSuccess: () => {
      setSnackbar({
        show: true,
        type: SNACKBAR_TYPE.CANCEL,
        message: '해당 알림을 삭제했습니다.',
        duration: 3000,
      });
    },
    onError: () => {
      setSnackbar({
        show: true,
        type: SNACKBAR_TYPE.ERROR,
        message: '알림 삭제에 실패했습니다.',
        duration: 3000,
      });
    },
  });

  const handleRead = useCallback(
    (notificationId: number) => {
      mutateRead.mutate(notificationId);
    },
    [mutateRead],
  );

  const handleDelete = useCallback(
    (notificationId: number) => {
      mutateDelete.mutate(notificationId);
    },
    [mutateDelete],
  );

  if (isLoading) return <p className="text-sm text-center text-gray-2 dark:text-gray-3">불러오는 중...</p>;

  return (
    <section className="flex flex-col gap-4 p-5 px-5 mt-6 mb-10 rounded-xl border border-gray-1 dark:border-dark-l">
      <h2 className="text-xl font-semibold">최근 알림</h2>
      <Separator />

      {notifications && notifications.length > 0 ? (
        <div className="flex flex-col gap-3 md:gap-4">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.notification_id}
              {...notification}
              onClickRead={handleRead}
              onClickDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">최근 알림이 없습니다.</p>
      )}

      {/* 푸터: 왼쪽 읽지 않은 알림 수, 오른쪽 더보기 버튼 */}
      <div className="flex justify-between items-center mt-4">
        {notificationCount && (
          <p className="text-xs md:text-sm text-gray-2 dark:text-gray-3">
            <span className="text-black dark:text-gray-2">{notificationCount.notification_count}개</span>의 읽지 않은
            알림이 있습니다.
          </p>
        )}
        <Button asChild variant="link" size="sm" className="text-xs md:text-sm">
          <Link href="/notification">알림 더 보기</Link>
        </Button>
      </div>
    </section>
  );
}
