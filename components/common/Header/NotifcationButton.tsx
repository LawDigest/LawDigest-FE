import Link from 'next/link';
import { IconNotification } from '@/public/svgs';

export default function NotificationButton() {
  return (
    <Link href="/notification">
      <IconNotification />
    </Link>
  );
}
