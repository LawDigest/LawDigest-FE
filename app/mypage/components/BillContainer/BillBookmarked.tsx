'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BillProps } from '@/types';
import { Card, CardFooter, CardBody, Chip, AvatarGroup, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { PartyLogoReplacement } from '@/components';

export default function BillBookmarked({
  bill_info_dto: { bill_id, brief_summary, bill_stage },
  representative_proposer_dto_list,
  public_proposer_dto_list,
}: BillProps) {
  const isRepresentativeSolo = representative_proposer_dto_list.length === 1;
  const partyName = isRepresentativeSolo ? representative_proposer_dto_list[0].party_name : '다수';
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();

  return (
    <Link href={`/bill/${bill_id}`}>
      <Card className={`border-1.5 flex-row md:py-3 lg:py-6 ${partyName}`} radius="md">
        <CardBody className="flex justify-between gap-2">
          <p className="text-sm font-bold md:text-base lg:text-lg">{brief_summary}</p>
          <div className="flex flex-wrap items-center w-full gap-2 overflow-visible">
            <Chip
              className="text-xs bg-transparent md:text-sm text-gray-2 border-gray-1 dark:border-gray-3 dark:text-gray-3 border-1"
              size="sm"
              variant="bordered"
              radius="sm">
              {bill_stage}
            </Chip>
            <h4 className="text-xs font-semibold md:text-sm text-gray-2 shrink-0">
              {isRepresentativeSolo
                ? `${
                    representative_proposer_dto_list[0].representative_proposer_name
                  } 의원 등 ${public_proposer_dto_list.length + 1}인`
                : `${representative_proposer_dto_list
                    .map(({ representative_proposer_name }) => representative_proposer_name)
                    .join('·')} 의원 등 ${representative_proposer_dto_list.length + public_proposer_dto_list.length}인`}
            </h4>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pl-0 overflow-visible basis-1/4 md:basis-1/5 shrink-0">
          {/* eslint-disable-next-line no-nested-ternary */}
          {isRepresentativeSolo ? (
            representative_proposer_dto_list[0].party_image_url !== null ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? representative_proposer_dto_list[0].party_image_url.replace('wide', 'dark') : representative_proposer_dto_list[0].party_image_url}`}
                width={60}
                height={30}
                alt={`${representative_proposer_dto_list[0].party_name} 이미지`}
                className="object-contain w-[60px] h-[30px] md:w-[90px] md:h-[45px]"
              />
            ) : (
              <PartyLogoReplacement partyName={representative_proposer_dto_list[0].party_name} circle={false} />
            )
          ) : (
            <AvatarGroup>
              {representative_proposer_dto_list.map(({ party_image_url, party_id, party_name }) => (
                <Avatar
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? party_image_url.replace('wide', 'dark') : party_image_url}`}
                  key={party_id}
                  size="md"
                  classNames={{
                    base: [`bg-white dark:bg-dark-l p-1 border ${party_name}`],
                    img: ['object-contain'],
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (party_image_url !== null) router.push(`/party/${party_id}`);
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
