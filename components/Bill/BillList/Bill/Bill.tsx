'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { MoreIcon } from '@/components/common/Icons';
import Link from 'next/link';
import { BillProps } from '@/types';

export default function Bill({
  bill_id,
  proposers,
  represent_proposer_id,
  represent_proposer,
  party_id_list,
  gpt_summary,
  summary,
  propose_date,
  children,
  divide,
  party_image_urls,
  represent_proposer_img_url,
}: BillProps) {
  return (
    <Card key={bill_id} className="w-full mr-0 rounded-none shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar radius="full" size="sm" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${represent_proposer_img_url}`} />
          <div className="flex flex-col items-start justify-center">
            <Link href={`/congressman/${represent_proposer_id}`}>
              <h4 className="font-semibold leading-none text-small text-default-600">{represent_proposer} 의원</h4>
            </Link>
            <h5 className="text-xs tracking-tight text-default-400">{proposers}</h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-xs tracking-tight text-default-400">{propose_date}</h5>
          {party_image_urls?.length <= 1 ? (
            <Link href={`/party/${party_id_list.at(0)}`}>
              <Avatar
                size="sm"
                className="bg-white"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${party_image_urls.at(0)}`}
              />
            </Link>
          ) : (
            <AvatarGroup size="sm" max={3}>
              {party_image_urls?.map((partyImageUrl, index) => (
                <Link key={partyImageUrl} href={`/party/${party_id_list[index]}`}>
                  <Avatar className="bg-white" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${partyImageUrl}`} />
                </Link>
              ))}
            </AvatarGroup>
          )}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <button type="button" aria-label="Dropdown Trigger">
                <MoreIcon color="#94A3B8" />
              </button>
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
      </CardHeader>
      <CardBody className="px-3 py-0 leading-normal whitespace-pre-wrap text-small">
        <p>
          {gpt_summary && gpt_summary}
          {!gpt_summary && summary}
        </p>
        {children}
      </CardBody>
      {divide && <div className="w-full h-[8px] my-5 bg-[#E2E8F0]" />}
    </Card>
  );
}
