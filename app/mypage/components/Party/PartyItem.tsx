import Image from 'next/image';
import Link from 'next/link';
import { FollowingPartyType } from '@/types';

export default function PartyItem({ party_id, party_name, party_image_url }: FollowingPartyType) {
  return (
    <Link href={`/party/${party_id}`}>
      <div className="w-[132px] h-[102px] rounded-lg mr-[10px] border-[2px]">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
          width={132}
          height={102}
          alt={`${party_name} 로고 이미지`}
          className="object-cover w-[132px] h-[102px] rounded-lg"
        />
      </div>
    </Link>
  );
}
