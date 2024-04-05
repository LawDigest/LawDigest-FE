import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/react';
import { QueryClient } from '@tanstack/react-query';
import { useGetUserInfo } from '../../apis';

export default async function UserInfo({ queryClient }: { queryClient: QueryClient }) {
  const { data: userInfo } = await useGetUserInfo(queryClient);
  const { user_name, user_image_url, user_email } = userInfo;

  return (
    <section className="flex items-center px-[30px] justify-between h-[200px] shadow-md rounded-xl bg-white pb-7">
      <div className="flex items-center">
        <Avatar src={`${user_image_url}`} className="w-[100px] h-[100px] mr-4" />

        <div className="flex flex-col gap-3">
          <p className="text-3xl font-semibold">{user_name}</p>
          <p className="text-[#999999] text-xs">{user_email}</p>
        </div>
      </div>

      <Button
        radius="full"
        size="sm"
        variant="bordered"
        className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] ">
        로그아웃
      </Button>
    </section>
  );
}
