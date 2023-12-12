'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { MoreIcon } from '@/components/common/icons';
import { BillProps } from './type';

export default function Bill({
  bill_id,
  bill_name,
  represent_proposer,
  public_proposer,
  summary,
  propose_date,
  children,
  divide,
}: BillProps) {
  return (
    <Card key={bill_id} className="w-full mr-0 rounded-none shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar radius="full" size="sm" src="/avatars/avatar-1.png" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-semibold leading-none text-small text-default-600">{represent_proposer} 의원</h4>
            <h5 className="text-xs tracking-tight text-default-400">
              {bill_name} 의원 외 {public_proposer.length}인
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-xs tracking-tight text-default-400">{propose_date}</h5>
          <AvatarGroup size="sm" max={3}>
            {/* TODO: 발의 정당 추가 */}
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
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
        <p>{summary}</p>
        {children}
      </CardBody>
      {divide && <div className="w-full h-[8px] my-3 bg-[#E2E8F0] " />}
    </Card>
  );
}
