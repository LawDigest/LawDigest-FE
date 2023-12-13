'use client';

import { AvatarGroup, Avatar } from '@nextui-org/avatar';
import { Spinner } from '@nextui-org/spinner';
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { useState, useMemo } from 'react';
import { Badge } from '@nextui-org/badge';
import { DpkLogo, DetailIcon } from '@/components/common/Icons';
import BillTab from '@/components/BillTab';
import { BILL_TAB } from '@/constants';
import Bill from '@/components/Bill';
import { useIntersect, useTabType } from '@/hooks';
import { useGetBillByCongressman } from './apis';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const { billType, setBillType } = useTabType<typeof BILL_TAB>('representProposer');

  // TODO: 대표발의, 공동발의 클릭에 따라 다른 api 요청 작업
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBillByCongressman(id);
  const bills = useMemo(() => (data ? data.pages.flatMap(({ data: { bills: responses } }) => responses) : []), [data]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      <Card className="w-full mr-0 rounded-none shadow-none">
        <CardHeader className="justify-between ">
          <section className="flex justify-between w-full">
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-[12px]">
                <h1 className="text-[28px] font-medium">한정애</h1>
                <Button color="primary" size="sm" variant="flat" className="text-sm font-semibold">
                  더불어민주당
                </Button>
              </div>
              <div className="mt-[18px]">
                <p>서울시 강서구 병 3선</p>
                <p>보건복지위원회 소속</p>
              </div>
            </div>
            <div className="flex gap-2 h-fit mr-[11px]">
              <Badge
                content={<DpkLogo />}
                placement="bottom-right"
                shape="circle"
                showOutline={false}
                className="bg-transparent">
                <Avatar
                  radius="full"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  className="w-[84px] h-[84px]"
                />
              </Badge>
            </div>
          </section>
        </CardHeader>
        <CardBody className="px-3 py-0 leading-6 text-small">
          <div className="flex items-center w-full gap-1 h-[60px]">
            <AvatarGroup size="sm" max={3}>
              {/* TODO: 발의 정당 추가 */}
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </AvatarGroup>
            <div className="text-[#B8B8B8]">26 followers</div>
          </div>
          <div className="flex justify-between w-full gap-4">
            <Button color="primary" variant="flat" className="w-full" onClick={() => setIsFollow(() => !isFollow)}>
              {isFollow ? '팔로우' : '팔로잉'}
            </Button>
            <Button
              variant="flat"
              className="w-full bg-[#F4F4F4]"
              // TODO: Link 추가
              // href={link}
            >
              웹사이트 방문
            </Button>
          </div>
        </CardBody>
      </Card>
      <BillTab type={billType} clickHandler={setBillType as any} />
      <div>
        {bills.map((bill) => (
          <Bill key={bill.bill_id} {...bill} divide>
            <Button
              className="mt-[20px] w-full h-[28px] font-semibold flex justify-center gap-[10px]"
              color="primary"
              size="sm"
              variant="flat"
              href={String(bill.bill_id)}>
              자세히보기
              <DetailIcon color="#006FEE" />
            </Button>
          </Bill>
        ))}
        {isFetching && (
          <div className="flex justify-center w-full my-4">
            <Spinner color="default" />
          </div>
        )}
        <div ref={ref} />
      </div>
    </>
  );
}
