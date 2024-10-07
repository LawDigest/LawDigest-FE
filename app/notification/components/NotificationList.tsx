import { getDateStatus } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Divider, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { IconKebab } from '@/public/svgs';
import { getNotification } from '../apis';
import Notification from './Notification';

const sample = [
  {
    title: '한국산업은행 재무 건전성 유지 노력 명시화를 위한 한국산업은행법 일부개정안',
    content: `심사 단계가 ‘위원회 심사'로 변동했어요!`,
    type: 'party',
    target: 'PRC_Z2A4Y0Z6X2X8G1E6E0C8D3C4C0Y9W5',
    created_date: '2024-10-01 16:36:20',
    notification_image_url_list: ['/party/wide/1.png'],
  },
  {
    title: '한국산업은행 재무 건전성 유지 노력 명시화를 위한 한국산업은행법 일부개정안',
    content: `심사 단계가 ‘위원회 심사'로 변동했어요!`,
    type: 'party',
    target: 'PRC_Z2A4Y0Z6X2X8G1E6E0C8D3C4C0Y9W5',
    created_date: '2024-09-28 16:36:20',
    notification_image_url_list: ['/party/wide/1.png'],
  },
  {
    title: '한국산업은행 재무 건전성 유지 노력 명시화를 위한 한국산업은행법 일부개정안',
    content: `심사 단계가 ‘위원회 심사'로 변동했어요!`,
    type: 'party',
    target: 'PRC_Z2A4Y0Z6X2X8G1E6E0C8D3C4C0Y9W5',
    created_date: '2024-09-27 16:36:20',
    notification_image_url_list: ['/party/wide/1.png', '/party/wide/2.png'],
  },
  {
    title: '한국산업은행 재무 건전성 유지 노력 명시화를 위한 한국산업은행법 일부개정안',
    content: `심사 단계가 ‘위원회 심사'로 변동했어요!`,
    type: 'party',
    target: 'PRC_Z2A4Y0Z6X2X8G1E6E0C8D3C4C0Y9W5',
    created_date: '2024-09-20 16:36:20',
    notification_image_url_list: ['/party/wide/1.png', '/party/wide/2.png', '/party/wide/3.png'],
  },
  {
    title: '홍길동',
    content: `심사 단계가 ‘위원회 심사'로 변동했어요!`,
    type: 'bill',
    target: 'PRC_Z2A4Y0Z6X2X8G1E6E0C8D3C4C0Y9W5',
    created_date: '2024-08-10 16:36:20',
    notification_image_url_list: ['/congressman/21/4U29186R.jpg'],
  },
];

export default function NotificationList() {
  const { data: notifications } = useQuery({ queryKey: ['/notification'], queryFn: getNotification });
  const notificationLength = notifications && sample.length;
  const notificationListByDateStatus = Array.from(Array(3), (v, i) =>
    // eslint-disable-next-line no-nested-ternary
    i === 0
      ? sample.filter((notification) => getDateStatus(notification.created_date) === '이번 주')
      : i === 1
        ? sample.filter((notification) => getDateStatus(notification.created_date) === '이번 달')
        : sample.filter((notification) => getDateStatus(notification.created_date) === '이전 알림'),
  );

  return (
    <section className="flex flex-col px-5 mt-6 mb-10">
      <div className="mb-[18px] ml-3">
        {notificationLength === 0 ? (
          <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">알림이 없습니다.</p>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">
              <span className="text-black dark:text-gray-2">{sample.length}개</span>의 읽지 않은 알림이 있습니다.
            </p>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" className="bg-transparent">
                  <IconKebab isPassed />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>모두 읽기</DropdownItem>
                <DropdownItem>모두 삭제</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )}
      </div>

      <section className="flex flex-col gap-[14px]">
        <h2 className="text-xl font-semibold">이번 주</h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {notifications &&
            (notificationListByDateStatus[0].length === 0 ? (
              <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">이번 주 알림이 없습니다.</p>
            ) : (
              notificationListByDateStatus[0].map((notification) => (
                <Notification key={notification.title + notification.target} {...notification} />
              ))
            ))}
        </div>

        <Divider className="my-6" />

        <h2 className="text-xl font-semibold">이번 달</h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {notifications &&
            (notificationListByDateStatus[1].length === 0 ? (
              <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">이번 달 알림이 없습니다.</p>
            ) : (
              notificationListByDateStatus[1].map((notification) => (
                <Notification key={notification.title + notification.target} {...notification} />
              ))
            ))}
        </div>

        <Divider className="my-6" />

        <h2 className="text-xl font-semibold">이전 알림</h2>
        <div className="flex flex-col gap-3 md:gap-4">
          {notifications &&
            (notificationListByDateStatus[0].length === 0 ? (
              <p className="text-sm md:text-base text-gray-2 dark:text-gray-3">이전 알림이 없습니다.</p>
            ) : (
              notificationListByDateStatus[2].map((notification) => (
                <Notification key={notification.title + notification.target} {...notification} />
              ))
            ))}
        </div>
      </section>
    </section>
  );
}
