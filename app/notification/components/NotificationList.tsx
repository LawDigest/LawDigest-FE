import { useQuery } from '@tanstack/react-query';
import { getNotification } from '../apis';
import Notification from './Notification';

export default function NotificationList() {
  const { data: notifications } = useQuery({ queryKey: ['/notification'], queryFn: getNotification });

  const notificationLength = notifications && notifications.data.length;

  return (
    <section className="flex flex-col gap-6 px-5 mt-6 mb-10">
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-xl font-bold md:text-2xl ">알림</h1>
        {notificationLength === 0 ? (
          <p className="text-sm md:text-base text-gray-2">알림이 없습니다.</p>
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
