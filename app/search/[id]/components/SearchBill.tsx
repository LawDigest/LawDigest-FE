'use client';

import { useCallback, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider, Tooltip, Chip } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchBillProps } from '@/types';
import { IconClock, IconExport, IconScrabSmall } from '@/public/svgs';
import { getPartyColor, getTimeRemaining, copyClipBoard } from '@/utils';
import { PartyLogo } from '@/components';

export default function SearchBill({
  id,
  name,
  brief_summary,
  bill_stage,
  proposed_date,
  gpt_summary,
  like_count,
  view_count,
  proposers,
  party_name,
  party_image_url,
  congressman_id,
  congressman_image_url,
  representative_proposer,
  viewCount,
  detail,
}: SearchBillProps) {
  const partyColor = getPartyColor(party_name);
  const [toggleMore, setToggleMore] = useState(false);

  const handleCopyClipBoard = useCallback(() => {
    copyClipBoard(`${process.env.NEXT_PUBLIC_DOMAIN}/bill/${id}`);
  }, []);

  const onClickToggleMore = useCallback(() => {
    setToggleMore(!toggleMore);
  }, [toggleMore]);

  return (
    <section className="flex flex-col gap-5 my-6">
      <Card key={id} className="flex flex-col gap-5 mx-5 dark:bg-dark-b" radius="none" shadow="none">
        <CardHeader className="flex flex-col items-start gap-2 p-0">
          {detail && (
            <div className="flex items-center gap-1">
              <IconClock />
              <h5 className="text-sm tracking-tight text-gray-2">{getTimeRemaining(proposed_date)}</h5>
            </div>
          )}
          <div className="flex items-start justify-between w-full">
            <h2 className={`${detail ? 'text-[26px]' : 'text-xl'} font-semibold`}>{brief_summary}</h2>

            {detail && (
              <Button isIconOnly className="bg-transparent">
                <IconScrabSmall isActive={false} />
              </Button>
            )}

            {!detail && (
              <Tooltip content="링크 복사하기">
                <Button
                  isIconOnly
                  size="sm"
                  className="bg-transparent"
                  aria-label="Export Button"
                  onClick={handleCopyClipBoard}>
                  <IconExport />
                </Button>
              </Tooltip>
            )}
          </div>

          {!detail && (
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xs tracking-tight text-gray-3">{getTimeRemaining(proposed_date)}</h5>
              <Chip
                className="text-xs bg-transparent text-gray-2 border-gray-1 dark:border-gray-3 dark:text-gray-3 border-1"
                size="sm"
                variant="bordered"
                radius="sm">
                {bill_stage}
              </Chip>
            </div>
          )}
        </CardHeader>

        <CardBody className="flex flex-col gap-3 p-0 leading-normal whitespace-pre-wrap">
          <h3 className="text-sm text-gray-2 dark:text-gray-3">{name}</h3>

          {/* eslint-disable-next-line no-nested-ternary */}
          <p className={detail ? '' : toggleMore ? '' : 'line-clamp-[8]'}>{gpt_summary}</p>

          <div className="flex justify-center">
            <Button
              onClick={onClickToggleMore}
              className="h-[30px] border-1 border-gray-1 text-gray-2 dark:border-gray-3"
              radius="full"
              size="sm"
              variant="bordered">
              {toggleMore ? '줄이기' : '더 보기'}
            </Button>
          </div>
        </CardBody>

        {!detail && (
          <CardFooter className="flex items-center justify-between p-0 -ml-1">
            <div className="flex gap-4">
              <div className="flex items-center text-sm text-gray-3">
                <Button isIconOnly size="sm" className="p-0 bg-transparent">
                  <IconScrabSmall isActive={false} />
                </Button>
                <h4 className="mr-2">스크랩</h4>
                <h4>{like_count}</h4>
              </div>
              <div className="flex items-center text-sm text-gray-3">
                <h4 className="mr-2">조회수</h4>
                <h4>{view_count}</h4>
              </div>
            </div>

            <Link href={`/bill/${id}`}>
              <Button
                className="text-sm font-medium bg-gray-1 text-gray-3 w-[88px] h-8 dark:bg-gray-4 dark:text-gray-2"
                size="sm"
                variant="flat">
                자세히 보기
              </Button>
            </Link>
          </CardFooter>
        )}

        {detail && (
          <CardFooter className="flex items-center justify-between p-0">
            <div className="flex gap-4">
              <div className="flex items-center text-sm text-gray-2">
                <h4 className="mr-2">스크랩</h4>
                <h4>{like_count}</h4>
              </div>
              <div className="flex items-center text-sm text-gray-2">
                <h4 className="mr-2">조회수</h4>
                <h4>{viewCount}</h4>
              </div>
            </div>

            <Tooltip content="링크 복사하기">
              <Button isIconOnly size="sm" className="bg-transparent" onClick={handleCopyClipBoard}>
                <IconExport />
              </Button>
            </Tooltip>
          </CardFooter>
        )}
      </Card>
      <Link href={`/congressman/${congressman_id}`}>
        <Card
          className={`flex flex-row h-[78px] mx-5 border-1.5 items-center justify-between px-[18px] border-[${partyColor}] dark:bg-gray-4 dark:border-dark-l`}
          radius="sm"
          shadow="sm">
          <div className="flex items-center gap-2">
            <Avatar
              radius="full"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${congressman_image_url}`}
              className="border"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium">{`${representative_proposer} 의원`}</h3>
              <h4 className="text-xs text-gray-2">{proposers}</h4>
            </div>
          </div>

          {party_image_url !== null ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${party_image_url}`}
              width={120}
              height={120}
              alt={`${party_name} 이미지`}
            />
          ) : (
            <PartyLogo partyName={party_name} circle={false} />
          )}
        </Card>
      </Link>
      {!detail && <Divider className="h-[10px] bg-gray-0.5 dark:bg-gray-4" />}
    </section>
  );
}
