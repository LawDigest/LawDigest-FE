'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import getTimeRemaining from '@/utils/getTimeRemaining';
import { NotificationProps } from '@/types';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { IconAlert } from '@/public/svgs';

export default function Notification({
  title,
  content,
  created_date,
  type,
  notification_image_url_list,
  target,
}: NotificationProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isRepresentativeSolo = notification_image_url_list.length === 1;

  return (
    <section className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <IconAlert />

        {isRepresentativeSolo ? (
          <Avatar
            radius="full"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? notification_image_url_list[0].replace('wide', 'dark') : notification_image_url_list[0]}`}
            size="md"
            className="w-[50px] h-[50px]"
            classNames={{
              base: [
                `${type === 'party' ? 'bg-white dark:bg-dark-pb p-1' : ''} border ${notification_image_url_list[0]}`,
              ],
              img: [`${type === 'party' ? 'object-contain' : ''}`],
            }}
          />
        ) : (
          <AvatarGroup className={`w-[50px] ${notification_image_url_list.length >= 3 ? 'gap-0' : ''}`} isGrid max={3}>
            {notification_image_url_list.map((notification_image_url) => (
              <Avatar
                key={notification_image_url}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? notification_image_url.replace('wide', 'dark') : notification_image_url}`}
                size="sm"
                classNames={{
                  base: [`shrink-0 bg-white dark:bg-dark-pb p-1 border ${notification_image_url}`],
                  img: ['object-contain'],
                }}
              />
            ))}
          </AvatarGroup>
        )}
      </div>
      <div className="flex flex-col w-full gap-1">
        <Link href={`bill/${target}`}>
          <p className="text-xs font-bold md:text-base ">
            {title} &nbsp;
            <span className="text-[10px] md:text-sm font-medium text-gray-2 dark:text-gray-3">
              {getTimeRemaining(created_date)}
            </span>
          </p>
        </Link>
        <p className="text-gray-2 dark:text-gray-3 text-[10px] md:text-sm">{content}</p>
      </div>
    </section>
  );
}
