'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardBody } from '@nextui-org/react';

export default function ProcessResult({
  approval_count,
  total_vote_count,
  party_vote_list,
}: {
  approval_count: number;
  total_vote_count: number;
  party_vote_list: {
    party_info: {
      party_id: number;
      party_name: string;
      party_image_url: string;
    };
    party_approval_count: number;
  }[];
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return approval_count === null ? (
    <p className="text-sm text-gray-2 md:h-[200px] lg:h-auto lg:text-base dark:text-gray-3">투표 정보가 없습니다.</p>
  ) : (
    <Card
      className="flex-row"
      classNames={{
        base: [`dark:lg:bg-dark-pb`],
      }}>
      <CardHeader className="flex flex-col justify-center gap-1 basis-1/2">
        <p className="lg:text-xl">원안가결</p>
        <div>
          <span className="text-xl font-semibold lg:text-2xl">{approval_count}</span>/
          <span className="text-sm lg:text-base">{total_vote_count}</span>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col gap-3 py-5 pl-0 pr-6 basis-1/2">
        {party_vote_list
          .sort((a, b) => b.party_approval_count - a.party_approval_count)
          .map(({ party_info: { party_id, party_name, party_image_url }, party_approval_count }) => (
            <div key={party_id} className="flex items-center justify-between">
              <Link
                href={`/party/${party_id}`}
                className={`flex items-center justify-center w-8 h-8 rounded-full shadow-lg shrink-0 border-1.5 ${party_name}`}>
                {party_name === '무소속' ? (
                  <div className="text-xs font-medium text-black">무</div>
                ) : (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${isDark ? party_image_url.replace('wide', 'dark') : party_image_url}`}
                    width={24}
                    height={24}
                    alt={`${party_name} 로고 이미지`}
                  />
                )}
              </Link>
              <Link href={`/party/${party_id}`}>
                <p className="text-xs font-semibold lg:text-sm text-gray-2 dark:text-gray-1">{party_name}</p>
              </Link>
              <p className="text-xs lg:text-sm font-medium w-[32px] lg:w-[40px]">
                {party_approval_count}
                <span className="font-light">표</span>
              </p>
            </div>
          ))}
      </CardBody>
    </Card>
  );
}
