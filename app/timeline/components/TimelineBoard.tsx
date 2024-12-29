import { Divider, Card, CardBody } from '@nextui-org/react';
import { getDDay } from '@/utils';

export default function TimelineBoard() {
  return (
    <Card
      classNames={{
        base: ['shadow-[0_4px_6px_-2px_rgba(0,_0,_0,_0.1)] md:shadow-[0_0_6px_rgba(0,_0,_0,_0.1)]'],
      }}
      className="w-full border-b md:border dark:border-dark-l mx-auto bg-transparent md:dark:bg-primary-3 md:mt-10 md:mb-6 md:w-[708px] md:pt-3 md:rounded-xl ">
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
