import { QueryClient } from '@tanstack/react-query';
import { useGetNotification } from '../apis';
import Notification from './Notification';

export default async function NotificationList({ queryClient }: { queryClient: QueryClient }) {
  const { data: notifications } = await useGetNotification(queryClient);
  const notificationLength = notifications.length;

  return (
    <section className="flex flex-col gap-6 px-5 mb-10">
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-2xl font-bold ">알림</h1>
        <p className="text-sm text-gray-2">
          <span className="text-black">{notificationLength}개</span>의 읽지 않은 알림이 있습니다.
        </p>
      </div>

      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-4">
          {notifications.map((notification) => (
            <Notification key={notification.title} {...notification} />
          ))}
        </div>
      </div>
    </section>
  );
}
