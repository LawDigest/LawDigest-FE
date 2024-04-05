import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants';
import { useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { postLogout } from '../../apis';

export default function LogoutButton() {
  const router = useRouter();

  const onClickLogout = useCallback(async () => {
    const res = await postLogout();

    if (Number(res.code) === 200) {
      router.push('/login');
      deleteCookie(ACCESS_TOKEN);
      deleteCookie(REFRESH_TOKEN);
    }
  }, []);

  return (
    <Button
      onClick={onClickLogout}
      radius="full"
      size="sm"
      variant="bordered"
      className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] ">
      로그아웃
    </Button>
  );
}
