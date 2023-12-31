'use client';

import { useState } from 'react';
import { AlarmIcon, LikeIcon, ShareIcon } from '@/components/common/Icons';
import { Button } from '@nextui-org/button';

export default function CardFooter({ like, view }: { like: number; view: number }) {
  const [isLike, setIsLike] = useState(like || false);

  return (
    <div className="w-[92%] mt-[30px] flex justify-between items-center">
      <div className="flex justify-center gap-0">
        <Button className="bg-transparent" isIconOnly aria-label="Like" onClick={() => setIsLike(!isLike)}>
          <LikeIcon color={isLike ? 'red' : 'black'} />
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
          {/* eslint-disable-next-line */}
          <p className="font-semibold text-default-400 text-small">좋아요</p>
          <p className=" text-default-400 text-small">{like}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">조회수</p>
          <p className="text-default-400 text-small">{view}</p>
        </div>
      </div>
    </div>
  );
}
