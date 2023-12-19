'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { useState, useEffect } from 'react';
import { BILL_TAB_KO } from '@/constants';
import { useIntersect, useTabType } from '@/hooks';
import Link from 'next/link';
import { BillList, BillTab } from '@/components/Bill';
import { useGetBillByParty } from './apis';

export default function Party({ params: { id } }: { params: { id: string } }) {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const { billType, setBillType } = useTabType<typeof BILL_TAB_KO>('대표발의한 법안');

  const { data, hasNextPage, isFetching, fetchNextPage, refetch } = useGetBillByParty(id, billType);
  const [bills, setBills] = useState(data ? data.pages.flatMap(({ data: { bills: responses } }) => responses) : []);
  const {
    party_detail: {
      party_img_url,
      party_name,
      district_representative_count,
      propotional_representative_count,
      website_url,
    },
  } = data.pages[0].data;
  const seatCount = district_representative_count + propotional_representative_count;

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setBills((prevBills) => [...prevBills, ...data.pages.flatMap(({ data: { bills: responses } }) => responses)]);
    }
  }, [data]);

  useEffect(() => {
    setBills([]);
    refetch();
  }, [billType]);

  return (
    <>
      <Card className="w-full mr-0 rounded-none shadow-none">
        <CardHeader className="justify-between">
          <section className="flex justify-between w-full">
            <div className="flex flex-col justify-between">
              <h1 className="text-[28px] font-medium">{party_name}</h1>
              <div className="mt-[18px]">
                <p>
                  의석수 : {seatCount} / 298석{' '}
                  <span className="text-[#A1A1AA]">{((seatCount / 298) * 100).toFixed(2)}%</span>
                </p>
                <p>
                  지역구 {district_representative_count}석, 비례대표 {propotional_representative_count}석
                </p>
              </div>
            </div>
            <div className="flex gap-2 h-fit mr-[11px]">
              <Avatar
                radius="full"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${party_img_url}`}
                className="w-[84px] h-[84px] bg-white"
              />
            </div>
          </section>
        </CardHeader>
        <hr className="mx-3 h-[1px] bg-[#A1A1AA]" />
        <CardBody className="px-3 py-0 leading-6 text-small mt-[14px]">
          <div className="flex justify-between w-full gap-4">
            <Button color="primary" variant="flat" className="w-full" onClick={() => setIsFollow(() => !isFollow)}>
              {isFollow ? '팔로우' : '팔로잉'}
            </Button>
            <Link href={website_url || ''} className="w-full">
              <Button variant="flat" className="w-full bg-[#F4F4F4]">
                웹사이트 방문
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
      <BillTab type={billType} clickHandler={setBillType as any} />
      <BillList bills={bills} isFetching={isFetching} fetchRef={ref} />
    </>
  );
}
