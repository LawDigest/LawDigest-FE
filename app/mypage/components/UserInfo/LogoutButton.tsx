import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ACCESS_TOKEN } from '@/constants';
import { useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { postLogout } from '../../apis';

export default function LogoutButton() {
  const router = useRouter();

  const onClickLogout = useCallback(async () => {
    postLogout();
    deleteCookie(ACCESS_TOKEN);
    router.push('/login');
  }, []);

  return (
    <Button
      onClick={onClickLogout}
      radius="full"
      size="sm"
      variant="bordered"
      className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] dark:border-gray-3 dark:text-gray-2">
      로그아웃
    </Button>
  );
}
