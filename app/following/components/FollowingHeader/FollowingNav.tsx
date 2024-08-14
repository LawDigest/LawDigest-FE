import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { useQueryClient } from '@tanstack/react-query';
import CongressmanList from './CongressmanList';
import { useGetFollowingCongressman } from '../../apis';

export default async function FollowingNav() {
  const queryClient = useQueryClient();
  const { data: congressmanList } = await useGetFollowingCongressman(queryClient);

  return (
    <Card
      classNames={{ base: ['rounded-t-none'] }}
      className="w-full pl-5 mx-auto bg-transparent lg:pt-8 lg:shadow-none dark:bg-primary-3 lg:dark:bg-transparent lg:border-r-1 lg:dark:border-dark-l lg:w-[360px]">
      <CardHeader className="pt-2 pb-0 pl-0 lg:hidden">
        <h2 className="text-2xl font-bold lg:text-3xl lg:mx-auto">팔로잉</h2>
      </CardHeader>
      <CardBody className="flex flex-row items-center gap-4 pl-0 overflow-x-scroll lg:flex-col">
        <div className="flex flex-col items-center shrink-0 lg:flex-row lg:justify-start lg:w-full lg:gap-2">
          <p className="text-xs font-medium text-gray-2 lg:text-[26px] lg:text-black lg:font-semibold lg:dark:text-white">
            팔로우한 의원
          </p>
          <p className="hidden lg:block text-[26px] font-semibold lg:dark:text-gray-2"> · </p>
          <p className="text-2xl font-semibold lg:text-[26px] lg:text-gray-2 lg:dark:text-gray-3">
            {congressmanList.length}
          </p>
        </div>

        <CongressmanList congressmanList={congressmanList} />
      </CardBody>
    </Card>
  );
}
