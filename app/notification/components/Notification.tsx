import Link from 'next/link';
import Image from 'next/image';
import getTimeRemaining from '@/utils/getTimeRemaining';
import { NotificationProps } from '@/types';

export default function Notification({
  title,
  content,
  created_date,
  notification_image_url,
  target,
}: NotificationProps) {
  return (
    <Link href={`bill/${target}`} className="flex items-center gap-4">
      <div className="w-[52px] h-[52px] rounded-full border flex items-center justify-center overflow-hidden shrink-0	">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + notification_image_url}
          width={50}
          height={20}
          alt="정당 로고 이미지"
          className="object-fit w-[50px] h-[20px]"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center justify-between">
          <p className="font-medium truncate w-[240px]">{title}</p>
          <p className="text-sm text-gray-2 shrink-0 "> {getTimeRemaining(created_date)}</p>
        </div>
        <p className="text-[#A1A1AA] text-sm truncate w-[240px]">{content}</p>
      </div>
    </Link>
  );
}
