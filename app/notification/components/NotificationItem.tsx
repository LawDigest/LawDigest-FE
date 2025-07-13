'use client';

import Link from 'next/link';
import getTimeRemaining from '@/utils/getTimeRemaining';
import type { Notification } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IconAlert, IconKebab } from '@/public/svgs';

export default function NotificationItem({
  title,
  content,
  created_date,
  type,
  notification_image_url_list,
  target,
  read,
  notification_id,
  onClickRead,
  onClickDelete,
}: Notification & {
  onClickRead: (notificationId: number, isClickByButton: boolean) => void;
  onClickDelete: (notificationId: number) => void;
}) {
  const isRepresentativeSolo = notification_image_url_list.length === 1;
  const imageUrlList = notification_image_url_list.map((str) => str.split(':'));
  const linkUrl = `${type === 'congressman_party_update' ? 'congressman' : 'bill'}/${target}`;

  return (
    <section className="flex items-center gap-[10px] lg:gap-4">
      <div className="flex gap-1 items-center">
        <div className={read ? 'invisible' : ''}>
          <IconAlert />
        </div>

        {isRepresentativeSolo ? (
          <Avatar
            className={`w-[50px] h-[50px] border ${imageUrlList[0][0]} ${
              type === 'bill_stage_update' || type === 'bill_result_update' ? 'bg-white dark:bg-dark-pb p-1' : ''
            }`}>
            <>
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrlList[0][1]}`}
                className={`${
                  type === 'bill_stage_update' || type === 'bill_result_update' ? 'object-contain' : ''
                } dark:hidden`}
              />
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrlList[0][1].replace('wide', 'dark')}`}
                className={`${
                  type === 'bill_stage_update' || type === 'bill_result_update' ? 'object-contain' : ''
                } hidden dark:block`}
              />
            </>
            <AvatarFallback>{imageUrlList[0][0][0]}</AvatarFallback>
          </Avatar>
        ) : (
          <div className={`flex -space-x-4 w-[50px] ${imageUrlList.length >= 3 ? 'gap-0' : ''}`}>
            {imageUrlList.slice(0, 3).map((notification_image_url) => (
              <Avatar key={notification_image_url[0]} className="shrink-0 bg-white dark:bg-dark-pb p-1 border">
                <>
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${notification_image_url[1]}`}
                    className="object-contain dark:hidden"
                  />
                  <AvatarImage
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${notification_image_url[1].replace('wide', 'dark')}`}
                    className="object-contain hidden dark:block"
                  />
                </>
                <AvatarFallback>{notification_image_url[0][0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1 w-full">
          <Link href={linkUrl} onClick={() => onClickRead(notification_id, false)}>
            <p className="text-xs font-bold md:text-base">
              {title} &nbsp;
              <span className="text-[10px] md:text-sm font-medium text-gray-2 dark:text-gray-3">
                {getTimeRemaining(created_date)}
              </span>
            </p>
          </Link>
          <p className="text-gray-3 dark:text-gray-2 text-[10px] md:text-sm">{content}</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IconKebab isPassed />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onClickRead(notification_id, true)}>읽음 표시</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onClickDelete(notification_id)}>삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
