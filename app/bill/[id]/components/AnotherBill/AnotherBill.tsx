'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Card, CardFooter, CardBody, Chip, AvatarGroup, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { PartyLogoReplacement } from '@/components';

export default function BillBookmarked({
  billBriefSummary,
  billId,
  billProposers,
  billStage,
  party,
}: {
  billBriefSummary: string;
  billId: string;
  billProposers: string;
  billStage: string;
  party: {
    party_id: number;
    party_image_url: string;
    party_name: string;
  }[];
}) {
  const isRepresentativeSolo = party.length === 1;
  const partyName = isRepresentativeSolo ? party[0].party_name : '다수';
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Link href={`/bill/${billId}`}>
      <Card className={`border-1.5 flex-row lg:py-6 ${partyName}`} radius="md">
        <CardBody className="flex justify-between gap-2 ">
          <p className="text-sm font-bold lg:text-lg">{billBriefSummary}</p>
          <div className="flex items-center w-full gap-2 ">
            <Chip
              className="text-xs bg-transparent lg:text-sm text-gray-2 border-gray-1 dark:border-gray-3 dark:text-gray-3 border-1"
              size="sm"
              variant="bordered"
              radius="sm">
              {billStage}
            </Chip>
            <h4 className="text-xs font-semibold lg:text-sm text-gray-2 shrink-0">{billProposers}</h4>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pt-0 basis-1/4 shrink-0">
          {/* eslint-disable-next-line no-nested-ternary */}
          {isRepresentativeSolo ? (
            party[0].party_image_url !== null ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? party[0].party_image_url.replace('wide', 'dark') : party[0].party_image_url}`}
                width={40}
                height={20}
                alt={`${party[0].party_name} 이미지`}
                className="object-contain w-10 h-8 lg:w-[120px] lg:h-[30px]"
              />
            ) : (
              <PartyLogoReplacement partyName={party[0].party_name} circle={false} />
            )
          ) : (
            <AvatarGroup>
              {party.map(({ party_image_url, party_id, party_name }) => (
                <Avatar
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? party_image_url.replace('wide', 'dark') : party_image_url}`}
                  key={party_id}
                  size="md"
                  classNames={{
                    base: [`bg-white dark:bg-dark-l p-1 border ${party_name}`],
                    img: ['object-contain'],
                  }}
                />
              ))}
            </AvatarGroup>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
