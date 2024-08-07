import { useQueryClient } from '@tanstack/react-query';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { PartyLogoReplacement } from '@/components';
import { Chip, Divider } from '@nextui-org/react';
import FollowButton from './FollowButton';
import { useGetCongressmanDetail } from '../../apis';

export default async function CongressmanDetail({ congressmanId }: { congressmanId: string }) {
  const queryClient = useQueryClient();
  const { data: congressman } = await useGetCongressmanDetail({ congressmanId, queryClient });
  const {
    congressman_name,
    party_id,
    party_name,
    party_image_url,
    district,
    commits,
    elected,
    congressman_image_url,
    like_checked,
    represent_count,
    public_count,
    office,
    email,
    age,
    gender,
  } = congressman;

  return (
    <Card
      className={`mx-5 mt-5 py-4 px-7 border-1.5 flex flex-col items-center gap-5 mb-4 dark:border-dark-l dark:bg-dark-b lg:h-min lg:w-[320px] shrink-0 lg:dark:bg-dark-pb ${party_name}`}
      shadow="md"
      radius="md">
      <Link href={party_image_url !== null ? `/party/${party_id.toString()}` : ''} className="">
        {party_image_url !== null ? (
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
            width={64}
            height={30}
            alt={`${party_name} 로고 이미지`}
            className="object-contain w-[64px] h-[30px]"
          />
        ) : (
          <PartyLogoReplacement partyName={party_name} circle={false} />
        )}
      </Link>

      <div className="flex justify-between w-full">
        <Avatar
          radius="full"
          src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url}
          className="w-[100px] h-[100px] border dark:border-dark-l"
        />

        <div className="flex flex-col justify-between py-3 w-[65%] items-end">
          <h3 className="text-2xl font-semibold">{congressman_name}</h3>
          <p className="text-sm text-gray-2">
            {district} {elected}
          </p>
          <p className="text-xs">{commits}</p>
        </div>
      </div>

      <Divider className="bg-gray-1" />

      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center basis-1/3">
          <p className="text-2xl font-semibold">0</p> {/* 팔로워 수 데이터 추가 시 변경 */}
          <p className="text-sm font-medium text-gray-2">팔로워</p>
        </div>
        <div className="flex flex-col items-center basis-1/3">
          <p className="text-2xl font-semibold">{represent_count}</p>
          <p className="text-sm font-medium text-gray-2">대표발의법안</p>
        </div>
        <div className="flex flex-col items-center basis-1/3">
          <p className="text-2xl font-semibold">{public_count}</p>
          <p className="text-sm font-medium text-gray-2">공동발의법안</p>
        </div>
      </div>

      <FollowButton id={congressmanId} likeChecked={like_checked} />

      <Divider className="bg-gray-1" />

      <div className="flex gap-[26px] justify-between w-full">
        <Chip className="text-sm font-medium text-white bg-primary-3 w-[78px] h-8">기본정보</Chip>

        <div className="w-full">
          <div className="flex justify-between">
            <p className="font-medium text-gray-2">나이</p>
            <p className="text-sm font-medium">{age}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-gray-2">성별</p>
            <p className="text-sm font-medium">{gender}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-gray-2">이메일</p>
            <p className="text-sm font-medium">{email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-gray-2">의원실</p>
            <p className="text-sm font-medium">{office}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
