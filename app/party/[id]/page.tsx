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
import Link from 'next/link';
import { useGetBillByParty } from './apis';

export default function Congressman({ params: { id } }: { params: { id: string } }) {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const { billType, setBillType } = useTabType<typeof BILL_TAB>('representProposer');

  // // TODO: 대표발의, 공동발의 클릭에 따라 다른 api 요청 작업
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetBillByParty(id);
  const bills = useMemo(
    () => (data ? data.pages.flatMap(({ result: { bills: responses } }) => responses) : []),
    [data],
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  return (
    <>
      <Card className="w-full mr-0 rounded-none shadow-none">
        <CardHeader className="justify-between">
          <section className="flex justify-between w-full">
            <div className="flex flex-col justify-between">
              <h1 className="text-[28px] font-medium">더불어민주당</h1>
              <h2>원당 1당(제1야당)</h2>
              <div className="mt-[18px]">
                <p>
                  의석수 : 168석 / 298석 <span className="text-[#A1A1AA]">56.38%</span>
                </p>
                <p>지역구 152석, 비례대표 16석</p>
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
        <hr className="mx-3 h-[1px] bg-[#A1A1AA]" />
        <CardBody className="px-3 py-0 leading-6 text-small mt-[14px]">
          <div className="flex justify-center gap-2">
            <Link href="#" className="w-[76px] h-[112px] flex flex-col gap-2 items-center">
              <p className="font-regular">당대표</p>
              <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p className="font-medium">이재명</p>
            </Link>
            <Link href="#" className="w-[76px] h-[112px] flex flex-col gap-2 items-center">
              <p className="font-regular">원내대표</p>
              <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p className="font-medium">홍익표</p>
            </Link>
            <Link href="#" className="w-[76px] h-[112px] flex flex-col gap-2 items-center">
              <p className="font-regular">사무대표</p>
              <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p className="font-medium">조정식</p>
            </Link>
            <Link href="#" className="w-[76px] h-[112px] flex flex-col gap-2 items-center">
              <p className="font-regular">정책위의장</p>
              <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p className="font-medium">이개호</p>
            </Link>
          </div>
          <div className="flex items-center w-full gap-1 h-[60px] ">
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
