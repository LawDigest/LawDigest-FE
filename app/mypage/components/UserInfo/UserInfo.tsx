import { Avatar } from '@nextui-org/avatar';
import { QueryClient } from '@tanstack/react-query';
import { Button } from '@nextui-org/react';
import http from '@/api';
import { useGetUserInfo } from '../../apis';
import LogoutButton from './LogoutButton';

export default async function UserInfo({ queryClient }: { queryClient: QueryClient }) {
  const { data: userInfo } = await useGetUserInfo(queryClient);
  const { user_name, user_image_url, user_email } = userInfo;

  return (
    <section className="flex items-center px-[30px] justify-between h-[200px] shadow-md rounded-xl bg-white pb-7 dark:bg-primary-3 lg:bg-gray-0.5 lg:shadow-none lg:h-[260px] lg:w-[200px] lg:justify-center lg:relative">
      <div className="flex items-center lg:flex-col lg:gap-5 ">
        <Avatar src={`${user_image_url}`} className="w-[100px] h-[100px] mr-4 lg:mr-0" />

        <div className="flex flex-col gap-3 lg:items-center">
          <p className="text-3xl font-semibold">{user_name}</p>
          <p className="text-[#999999] text-xs dark:text-gray-2">{user_email}</p>
        </div>
      </div>

      <Button
        onClick={() =>
          http
            .patch({
              url: '/auth/reissue/token',
            })
            .then((response) => console.log(response))
        }
        radius="full"
        size="sm"
        variant="bordered"
        className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] dark:border-gray-3 dark:text-gray-2">
        토큰 재발급
      </Button>

      <div className="lg:absolute lg:-bottom-[50px]">
        <LogoutButton />
      </div>
    </section>
  );
}
