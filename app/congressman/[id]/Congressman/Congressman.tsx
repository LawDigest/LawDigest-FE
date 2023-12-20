'use client';

import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { Badge } from '@nextui-org/badge';
import { Congressman } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CongressmanComponent({ congressman }: { congressman: Congressman }) {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const { name, party_name, party_image_url, congressman_image_url, elect_sort, district, commits, elected, homepage } =
    congressman;

  return (
    <Card className="w-full mr-0 rounded-none shadow-none">
      <CardHeader className="justify-between ">
        <section className="flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-[12px]">
              <h1 className="text-[28px] font-medium">{name}</h1>
              <Button color="primary" size="sm" variant="flat" className="text-sm font-semibold">
                {party_name}
              </Button>
            </div>
            <div className="mt-[18px]">
              <p>
                {district} {elect_sort} {elected}
              </p>
              <p>{commits}</p>
            </div>
          </div>
          <div className="flex gap-2 h-fit mr-[11px]">
            <Badge
              content={
                <Link href={homepage} className="w-full" target="_blank">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${party_image_url}`}
                    width={60}
                    height={60}
                    alt="partyImg"
                  />
                </Link>
              }
              placement="bottom-right"
              shape="circle"
              showOutline={false}
              className="bg-transparent">
              <Avatar
                radius="full"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${congressman_image_url}`}
                className="w-[84px] h-[84px]"
              />
            </Badge>
          </div>
        </section>
      </CardHeader>
      <CardBody className="px-3 py-0 leading-6 text-small">
        {/* <div className="flex items-center w-full gap-1 h-[60px]">
          <AvatarGroup size="sm" max={3}>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
          <div className="text-[#B8B8B8]">26 followers</div>
        </div> */}
        <div className="flex justify-between w-full gap-4">
          <Button color="primary" variant="flat" className="w-full" onClick={() => setIsFollow(() => !isFollow)}>
            {isFollow ? '팔로우' : '팔로잉'}
          </Button>
          <Link href={homepage} className="w-full" target="_blank">
            <Button variant="flat" className="w-full bg-[#F4F4F4]">
              웹사이트 방문
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
