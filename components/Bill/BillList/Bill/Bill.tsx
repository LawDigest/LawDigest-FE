'use client';

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button, Divider } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { BillProps } from '@/types';
import { IconClock, IconExport, IconKebab, IconScrabSmall } from '@/public/svgs';
import { getPartyColor, getTimeRemaining } from '@/utils';

export default function Bill({
  bill_info_dto: { bill_id, bill_name, propose_date, summary, gpt_summary },
  representative_proposer_dto: {
    representative_proposer_id,
    representative_proposer_name,
    represent_proposer_img_url,
    party_image_url,
    party_name,
  },
  public_proposer_dto_list,
  detail,
  congressman,
  children,
}: BillProps) {
  return (
    <section className="flex flex-col gap-5 my-6">
      <Card key={bill_id} className="flex flex-col gap-5 mx-5 " radius="none" shadow="none">
        <CardHeader className="flex flex-col items-start gap-2 p-0">
          {detail && (
            <div className="flex items-center gap-1">
              <IconClock />
              <h5 className="text-sm tracking-tight text-gray-2">{getTimeRemaining(propose_date)}</h5>
            </div>
          )}
          <div className="flex items-start justify-between w-full">
            <h2 className={`${detail ? 'text-[26px]' : 'text-xl'} font-semibold`}>{bill_name}</h2>

            {detail && (
              <Button isIconOnly className="bg-transparent">
                <IconScrabSmall />
              </Button>
            )}

            {!detail && (
              <div className="flex">
                <Button isIconOnly size="sm" className="bg-transparent" aria-label="Export Button">
                  <IconExport />
                </Button>

                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button isIconOnly size="sm" className="bg-transparent" aria-label="Dropdown Trigger">
                      <IconKebab />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="More Actions">
                    <DropdownItem key="profile" className="gap-2 h-14">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            )}
          </div>

          {!detail && <h5 className="text-xs tracking-tight text-gray-3">{getTimeRemaining(propose_date)}</h5>}
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
                <Button isIconOnly size="sm" className="p-0 bg-transparent">
                  <IconScrabSmall />
                </Button>
                <h4 className="mr-2">스크랩</h4>
                <h4>112</h4>
              </div>
              <div className="flex items-center text-sm text-gray-3">
                <h4 className="mr-2">조회수</h4>
                <h4>851</h4>
              </div>
            </div>

            <Link href={`/bill/${bill_id}`}>
              <Button className="text-sm font-medium bg-gray-1 text-gray-3 w-[88px] h-8" size="sm" variant="flat">
                자세히 보기
              </Button>
            </Link>
          </CardFooter>
        )}

        {detail && (
          <CardFooter className="flex items-center justify-between p-0">
            <div className="flex gap-4">
              <div className="flex items-center text-sm text-gray-2">
                <h4 className="mr-2">조회수</h4>
                <h4>851</h4>
              </div>
              <div className="flex items-center text-sm text-gray-2">
                <h4 className="mr-2">스크랩</h4>
                <h4>112</h4>
              </div>
            </div>

            <Button isIconOnly size="sm" className="bg-transparent">
              <IconExport />
            </Button>
          </CardFooter>
        )}
      </Card>

      <section className="mx-5">{children}</section>

      {!congressman && (
        <Link href={`/congressman/${representative_proposer_id}`}>
          <Card
            className={`flex flex-row h-[78px] mx-5 border-1.5 items-center justify-between px-[18px] border-party-${getPartyColor(party_name)} `}
            radius="sm"
            shadow="sm">
            <div className="flex items-center gap-2">
              <Avatar radius="full" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${represent_proposer_img_url}`} />
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium">{`${representative_proposer_name} 의원`}</h3>
                <h4 className="text-xs text-gray-2">{`${representative_proposer_name} 의원 외 ${public_proposer_dto_list.length}인`}</h4>
              </div>
            </div>

            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${party_image_url}`}
              width={120}
              height={120}
              alt={`${party_name} 이미지`}
            />
          </Card>
        </Link>
      )}

      {!detail && <Divider className="h-[10px] bg-gray-0.5" />}
    </section>
  );
}
