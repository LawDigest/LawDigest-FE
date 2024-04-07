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
      <Image src={notification_image_url} width={50} height={50} alt="정당 로고 이미지" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="font-medium">{title}</p>
          <p className="text-gray-2">&#183;</p>
          <p className="text-sm text-gray-2"> {getTimeRemaining(created_date)}</p>
        </div>
        <p className="text-[#A1A1AA] text-sm">{content}</p>
      </div>
    </Link>
  );
}
