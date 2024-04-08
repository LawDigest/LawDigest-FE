import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { IconNotification } from '@/public/svgs';
import { Badge } from '@nextui-org/badge';
import { getNotification } from '@/app/notification/apis';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';

export default function NotificationButton() {
  const accessToken = getCookie(ACCESS_TOKEN);

  if (!accessToken) {
    return (
      <Link href="/notification">
        <IconNotification />
      </Link>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: notifications } = useQuery({ queryKey: ['/notification'], queryFn: getNotification });

  if (notifications === undefined || notifications.data.length === 0) {
    return (
      <Link href="/notification">
        <IconNotification />
      </Link>
    );
  }

  return (
    <Link href="/notification">
      <Badge shape="circle" content="" color="danger" size="sm">
        <IconNotification />
      </Badge>
    </Link>
  );
}
