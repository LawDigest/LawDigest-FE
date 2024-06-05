'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider, Tooltip, Chip } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { BillProps } from '@/types';
import { IconClock, IconExport, IconScrabSmall } from '@/public/svgs';
import { getPartyColor, getTimeRemaining, copyClipBoard } from '@/utils';
import { usePostBookmark } from '@/app/bill/[id]/apis';
import { PartyLogo } from '@/components/common';

export default function Bill({
  bill_info_dto: {
    bill_id,
    brief_summary,
    propose_date,
    summary,
    gpt_summary,
    view_count,
    bill_like_count,
    bill_stage,
  },
  representative_proposer_dto: {
    representative_proposer_id,
    representative_proposer_name,
    represent_proposer_img_url,
    party_id,
    party_image_url,
    party_name,
  },
  is_book_mark,
  public_proposer_dto_list,
  detail,
  children,
  viewCount,
}: BillProps) {
  const partyColor = getPartyColor(party_name);
  const [isLiked, setIsLiked] = useState(is_book_mark);
  const mutateBookmark = usePostBookmark(bill_id);
  const router = useRouter();

  useEffect(() => {
    setIsLiked(is_book_mark);
  }, [is_book_mark]);

  const onClickScrab = useCallback(() => {
    setIsLiked(!isLiked);

    mutateBookmark.mutate(!isLiked);
  }, [isLiked]);

  const handleCopyClipBoard = useCallback(() => {
    copyClipBoard(`${process.env.NEXT_PUBLIC_DOMAIN}/bill/${bill_id}`);
  }, []);

  return (
    <section className="flex flex-col gap-5 my-6">
      <Card key={bill_id} className="flex flex-col gap-5 mx-5 dark:bg-dark-b" radius="none" shadow="none">
        <CardHeader className="flex flex-col items-start gap-2 p-0">
          {detail && (
            <div className="flex items-center gap-1">
              <IconClock />
              <h5 className="text-sm tracking-tight text-gray-2">{getTimeRemaining(propose_date)}</h5>
            </div>
          )}
          <div className="flex items-start justify-between w-full">
            <h2 className={`${detail ? 'text-[26px]' : 'text-xl'} font-semibold`}>{brief_summary}</h2>

            {detail && (
              <Button isIconOnly className="bg-transparent" onClick={onClickScrab}>
                <IconScrabSmall isActive={isLiked} />
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
              <h5 className="text-xs tracking-tight text-gray-3">{getTimeRemaining(propose_date)}</h5>
              <Chip
                className="text-xs bg-transparent text-gray-2 border-gray-1 border-1 dark:border-gray-3"
                size="sm"
                variant="bordered"
                radius="sm">
                {bill_stage}
              </Chip>
            </div>
          )}
        </CardHeader>

        <CardBody className="p-0 leading-normal whitespace-pre-wrap">
          <p className={detail ? '' : 'line-clamp-[8]'}>
            {gpt_summary && gpt_summary}
            {!gpt_summary && summary}
          </p>
        </CardBody>

        {!detail && (
          <CardFooter className="flex items-center justify-between p-0 -ml-1">
            <div className="flex gap-4">
              <div className="flex items-center text-sm text-gray-3">
                <Button isIconOnly size="sm" className="p-0 bg-transparent" onClick={onClickScrab}>
                  <IconScrabSmall isActive={isLiked} />
                </Button>
                <h4 className="mr-2">스크랩</h4>
                <h4>{bill_like_count}</h4>
              </div>
              <div className="flex items-center text-sm text-gray-3">
                <h4 className="mr-2">조회수</h4>
                <h4>{view_count}</h4>
              </div>
            </div>

            <Link href={`/bill/${bill_id}`}>
              <Button
                className="text-sm font-medium bg-gray-1 dark:bg-gray-3 text-gray-3 dark:text-gray-2 w-[88px] h-8"
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
                <h4>{bill_like_count}</h4>
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

      <section className="mx-5">{children}</section>

      <Link href={`/congressman/${representative_proposer_id}`}>
        <Card
          className={`flex flex-row h-[78px] mx-5 border-1.5 items-center justify-between px-[18px] border-[${partyColor}] dark:bg-gray-4 dark:border-dark-l`}
          radius="sm"
          shadow="sm">
          <div className="flex items-center gap-2">
            <Avatar
              radius="full"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${represent_proposer_img_url}`}
              className="border dark:border-dark-l"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium">{`${representative_proposer_name} 의원`}</h3>
              <h4 className="text-xs text-gray-2">{`${representative_proposer_name} 의원 외 ${public_proposer_dto_list.length}인`}</h4>
            </div>
          </div>

          <Button
            className="bg-tranparent"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push(`/party/${party_id}`);
            }}>
            {party_image_url !== null ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${party_image_url}`}
                width={100}
                height={45}
                alt={`${party_name} 이미지`}
                className="w-[100px] h-[40px] object-contain"
              />
            ) : (
              <PartyLogo partyName={party_name} circle={false} />
            )}
          </Button>
        </Card>
      </Link>

      {!detail && <Divider className="h-[10px] bg-gray-0.5 dark:bg-gray-4" />}
    </section>
  );
}
