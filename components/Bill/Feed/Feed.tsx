'use client';

import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { AlarmIcon, DetailIcon, LikeIcon, MoreIcon, ShareIcon } from '@/components/icons';

export default function Feed() {
  return (
    <Card className="w-full mr-0 rounded-none shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar radius="full" size="sm" src="/avatars/avatar-1.png" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-semibold leading-none text-small text-default-600">홍길동 의원</h4>
            <h5 className="text-xs tracking-tight text-default-400">홍길동 의원 외 16인</h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-xs tracking-tight text-default-400">1일 전</h5>
          <AvatarGroup size="sm" max={3}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
          {/*  */}
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
          {/*  */}
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 leading-6 text-small">
        <p>
          도로교통법 일부개정법률안(이소영 의원 등 11인)은 어린이통학버스와 관련하여 몇 가지 변경을 제안하는 법안입니다.
          이 법률안에는 다음과 같은 주요 변경 사항이 포함되어 있습니다: 1.어린이통학버스의 이용 범위 확대: 현행법은
          어린이통학버스를 정의하고 어린이통학버스를 운영하려는 자에게 어린이통학버스로 사용할 수 있는 자동차의 요건을
          갖추어 미리 신고하도록 규정하고 있습니다. 이 법률안은 어린이통학버스의 이용 범위에 현장체험학습 등
          비상시적으로 이루어지는 교육활동을 위한 이동을 포함하려고 합니다. 이렇게 하면 어린이통학버스가 교육활동을 위한
          이동에도 사용될 수 있게 됩니다.
        </p>
        <Button
          className="mt-[20px] w-full h-[28px] font-semibold flex justify-center gap-[10px]"
          color="primary"
          size="sm"
          variant="flat">
          자세히보기
          <DetailIcon color="#006FEE" />
        </Button>
      </CardBody>
      <CardFooter className="flex justify-between">
        <div className="flex justify-center gap-0">
          <Button className="bg-transparent" isIconOnly aria-label="Like">
            <LikeIcon color="black" />
          </Button>
          <Button className="bg-transparent" isIconOnly aria-label="Like">
            <AlarmIcon color="black" />
          </Button>
          <Button className="bg-transparent" isIconOnly aria-label="Like">
            <ShareIcon color="black" />
          </Button>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">좋아요</p>
            <p className=" text-default-400 text-small">10</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">조회수</p>
            <p className="text-default-400 text-small">97.1K</p>
          </div>
        </div>
      </CardFooter>
      <div className="w-full h-[8px] my-3 bg-[#E2E8F0] " />
    </Card>
  );
}
