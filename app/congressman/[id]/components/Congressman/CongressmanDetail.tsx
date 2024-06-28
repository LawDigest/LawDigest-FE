import { useQueryClient } from '@tanstack/react-query';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { getPartyColor } from '@/utils';
import { PartyLogoReplacement } from '@/components';
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
  } = congressman;
  const partyColor = getPartyColor(party_name);

  return (
    <Card
      className={`mx-5 p-[18px] border-1.5 flex flex-col gap-[22px] border-party-${partyColor} mb-4 dark:border-dark-l dark:bg-dark-b lg:h-min lg:w-[307px] shrink-0 lg:dark:bg-dark-pb`}
      shadow="none"
      radius="md">
      <div className="flex justify-between gap-4 lg:flex-col lg:items-center">
        <Link href={`/party/${party_id.toString()}`} className="hidden lg:block">
          {party_image_url !== null ? (
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
              width={128}
              height={60}
              alt={`${party_name} 로고 이미지`}
              className="object-contain w-[128px] h-[60px]"
            />
          ) : (
            <PartyLogoReplacement partyName={party_name} circle={false} />
          )}
        </Link>

        <Avatar
          radius="full"
          src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url}
          className="w-[100px] h-[100px] border dark:border-dark-l"
        />

        <div className="flex flex-col justify-between w-[65%] lg:items-center items-start">
          <Link href={`/party/${party_id.toString()}`} className="lg:hidden">
            {party_image_url !== null ? (
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
                width={80}
                height={28}
                alt={`${party_name} 로고 이미지`}
                className="object-contain w-[80px] h-[28px]"
              />
            ) : (
              <PartyLogoReplacement partyName={party_name} circle={false} />
            )}
          </Link>
          <h3 className="text-2xl font-semibold">{congressman_name}</h3>
          <p className="text-xs text-gray-2 line-clamp-2">
            # {district} {elected} &nbsp;&nbsp;&nbsp; # {commits}
          </p>
        </div>
      </div>

      <FollowButton id={congressmanId} likeChecked={like_checked} />
    </Card>
  );
}
