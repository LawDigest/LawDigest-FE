import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { IconNotification } from '@/public/svgs';
import { Badge } from '@nextui-org/badge';
import { getNotification } from '@/app/notification/apis';

export default function NotificationButton() {
  const { data: notifications } = useQuery({ queryKey: ['/notification'], queryFn: getNotification });

  return (
    <Link href="/notification">
      {notifications !== undefined && notifications.data.length === 0 ? (
        <IconNotification />
      ) : (
        <Badge shape="circle" content="" color="danger" size="sm">
          <IconNotification />
        </Badge>
      )}
    </Link>
  );
}
