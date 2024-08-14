'use client';

import { useRouter } from 'next/navigation';
import { Avatar, Button } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { PartyLogoReplacement } from '@/components';
import { FollowingCongressmanType } from '@/types';

export default function CongressmanItem({
  congressman_id,
  congressman_name,
  congressman_image_url,
  party_id,
  party_name,
  party_image_url,
}: FollowingCongressmanType) {
  const router = useRouter();

  return (
    <Link href={`/congressman/${congressman_id}`} className="flex items-center lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-8">
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url}
          className={`w-14 h-14 border ${party_name}`}
        />

        <p className="text-xs font-semibold lg:text-xl shrink-0">
          {congressman_name} <span className="font-normal lg:text-lg lg:dark:text-gray-1">의원</span>
        </p>
      </div>

      <Button
        className="hidden bg-tranparent lg:block"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (party_image_url !== null) {
            router.push(`/party/${party_id}`);
          }
        }}>
        {party_image_url !== null ? (
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
            width={60}
            height={20}
            alt={`${party_name} 로고 이미지`}
          />
        ) : (
          <PartyLogoReplacement partyName={party_name} circle={false} />
        )}
      </Button>
    </Link>
  );
}
