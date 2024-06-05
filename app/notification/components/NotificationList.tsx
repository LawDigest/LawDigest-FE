import { useQuery } from '@tanstack/react-query';
import { getNotification } from '../apis';
import Notification from './Notification';

export default function NotificationList() {
  const { data: notifications } = useQuery({ queryKey: ['/notification'], queryFn: getNotification });

  const notificationLength = notifications && notifications.data.length;

  return (
    <section className="flex flex-col px-5 mb-10 gap-6">
      <div className="flex flex-col mb-8 gap-3">
        <h1 className="text-2xl font-bold ">알림</h1>
        {notificationLength === 0 ? (
          <p className="text-sm text-gray-2">알림이 없습니다.</p>
        ) : (
          <p className="text-sm text-gray-2 dark:text-gray-3">
            <span className="text-black dark:text-white">{notificationLength}개</span>의 읽지 않은 알림이 있습니다.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-4">
          {notifications &&
            notifications.data.map((notification) => (
              <Notification key={notification.title + notification.content} {...notification} />
            ))}
        </div>
      </div>
    </section>
  );
}
