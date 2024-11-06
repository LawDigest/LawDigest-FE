import { Divider, Card, CardBody } from '@nextui-org/react';
import { getDDay } from '@/utils';

export default function TimelineBoard() {
  return (
    <Card className="rounded-t-none">
      <CardBody className="flex flex-col items-center gap-1">
        <h2 className="font-semibold text-[26px]">타임라인</h2>
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold text-gray-2">제 22대 국회</p>
          <Divider orientation="vertical" className="h-4 w-[1px] bg-black" />
          <p className="text-lg font-semibold">{`D-${getDDay('2028-04-11')}`}</p>
        </div>
      </CardBody>
    </Card>
  );
}
