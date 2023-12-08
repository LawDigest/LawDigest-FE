import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { AlarmIcon, DetailIcon, LikeIcon, MoreIcon, ShareIcon } from '@/components/common/icons';
import { BillProps } from './type';

export default function Bill({ id, name, people, content, date, like, view }: BillProps) {
  return (
    <Card key={id} className="w-full mr-0 rounded-none shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Avatar radius="full" size="sm" src="/avatars/avatar-1.png" />
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-semibold leading-none text-small text-default-600">{name} 의원</h4>
            <h5 className="text-xs tracking-tight text-default-400">{people}</h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-xs tracking-tight text-default-400">{date}</h5>
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
      <CardBody className="px-3 py-0 leading-6 text-small">
        <p>{content}</p>
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
            <p className=" text-default-400 text-small">{like}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">조회수</p>
            <p className="text-default-400 text-small">{view}</p>
          </div>
        </div>
      </CardFooter>
      <div className="w-full h-[8px] my-3 bg-[#E2E8F0] " />
    </Card>
  );
}
