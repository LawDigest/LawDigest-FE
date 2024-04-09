import { PropotionalPartyListProps } from '@/types';
import { Card } from '@nextui-org/card';
import { Button, Link as NextUILInk } from '@nextui-org/react';
import Image from 'next/image';
import { PartyLogo } from '@/components';

export default function PropotionalItem({ party_id, party_image_url, party_name }: PropotionalPartyListProps) {
  return (
    <Card className="flex flex-row justify-between px-4 items-center h-[78px]">
      {party_image_url ? (
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
          width={100}
          height={40}
          alt={`${party_name} 로고 이미지`}
        />
      ) : (
        <PartyLogo partyName={party_name} circle={false} />
      )}

      <div>
        <Button
          as={NextUILInk}
          href={`/election/party/${party_id}?view=promise`}
          className="text-sm font-medium bg-tranparent text-gray-2">
          정당 공약
        </Button>
        <Button
          as={NextUILInk}
          href={`/election/party/${party_id}?view=candidateList`}
          className="text-sm font-medium bg-tranparent text-gray-2">
          후보자 명단
        </Button>
      </div>
    </Card>
  );
}
