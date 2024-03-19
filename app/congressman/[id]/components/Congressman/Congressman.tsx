import { QueryClient } from '@tanstack/react-query';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import { getPartyColor } from '@/utils';
import { useGetCongressmanDetail } from '../../apis';

export default async function CongressmanComponent({ id, queryClient }: { id: string; queryClient: QueryClient }) {
  const { data: congressman } = await useGetCongressmanDetail({ id, queryClient });
  const {
    congressman_id,
    congressman_name,
    party_id,
    party_name,
    party_image_url,
    elect_sort,
    district,
    commits,
    elected,
    homepage,
    represent_count,
    public_count,
    congressman_image_url,
  } = congressman;
  const partyColor = getPartyColor(party_name);

  return (
    <Card
      className={`mx-5 p-[18px] border-1.5 flex flex-col gap-[22px] border-party-${partyColor} `}
      shadow="none"
      radius="md">
      <div className="flex justify-between gap-4">
        <Avatar
          radius="full"
          src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url}
          className="w-[100px] h-[100px]"
        />

        <div className="flex flex-col justify-between w-[65%]">
          <Link href={`/party/${party_id}`}>
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
              width={80}
              height={15}
              alt={`${party_name} 로고 이미지`}
              className="object-cover w-[80px] h-[15px]"
            />
          </Link>
          <h3 className="text-2xl font-semibold">{congressman_name}</h3>
          <p className="text-xs text-gray-2 line-clamp-2">
            # {district} {elected} &nbsp;&nbsp;&nbsp; # {commits}
          </p>
        </div>
      </div>

      <Button radius="full" className="text-lg font-medium bg-gray-1 text-gray-3">
        팔로우
      </Button>
    </Card>
  );
}
