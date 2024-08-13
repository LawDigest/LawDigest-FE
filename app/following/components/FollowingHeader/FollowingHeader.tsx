import { Card, CardHeader, CardBody } from '@nextui-org/react';
import CongressmanList from './CongressmanList';
import { useQueryClient } from '@tanstack/react-query';
import { useGetFollowingCongressman } from '../../apis';

const congressmanList = [
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: '더불어민주당',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: '국민의힘',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: '진보당',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: '녹색정의당',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
  {
    congressman_id: 'string',
    congressman_name: '홍길동',
    congressman_image_url: 'string',
    party_id: 0,
    party_name: 'string',
  },
];

export default async function FollowingHeader() {
  const queryClient = useQueryClient();
  const { data: congressmanList } = await useGetFollowingCongressman(queryClient);

  return (
    <Card className="pl-5 lg:pl-3 lg:mt-8 lg:bg-gray-0.5 dark:bg-primary-3 w-full lg:w-[964px] mx-auto">
      <CardHeader className="pt-5 pl-0">
        <h2 className="text-2xl font-bold lg:text-3xl lg:mx-auto">팔로잉</h2>
      </CardHeader>
      <CardBody className="flex flex-row items-center gap-4 pl-0 overflow-x-scroll lg:flex-col">
        <div className="flex flex-col items-center shrink-0">
          <p className="text-xs font-medium text-gray-2 lg:text-base">팔로잉한 의원</p>
          <p className="text-2xl font-semibold lg:text-3xl">{congressmanList.length}</p>
        </div>
        <div>
          <CongressmanList congressmanList={congressmanList} />
        </div>
      </CardBody>
    </Card>
  );
}
