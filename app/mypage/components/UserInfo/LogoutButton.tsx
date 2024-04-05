import { useCallback } from 'react';
import { Button } from '@nextui-org/react';
import { postLogout } from '../../apis';

export default function LogoutButton() {
  const onClickLogout = useCallback(() => {
    postLogout();
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
