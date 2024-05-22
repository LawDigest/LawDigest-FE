import Image from 'next/image';
import Link from 'next/link';
import { FollowingPartyType } from '@/types';

export default function PartyItem({ party_id, party_name, party_image_url }: FollowingPartyType) {
  return (
    <Link href={`/party/${party_id}`}>
      <div className="w-[132px] h-[102px] rounded-lg mr-[10px] border-[2px] flex justify-center items-center bg-white">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
          width={100}
          height={40}
          alt={`${party_name} 로고 이미지`}
          className="object-cover w-[100px] h-[40px] rounded-lg"
        />
      </div>
    </Link>
  );
}
