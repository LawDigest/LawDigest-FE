'use client';

import { useState, useCallback } from 'react';
import { Button } from '@nextui-org/button';
import CongressmanItem from './CongressmanItem';

interface CongressmanListProps {
  congressmanList: {
    avatar_src: string;
    party_label: string;
    name: string;
  }[];
}

export default function CongressmanList({ congressmanList }: CongressmanListProps) {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-5 gap-y-[18px]">
        {congressmanList.slice(0, 10).map((congressman) => (
          <CongressmanItem key={congressman.name} {...congressman} />
        ))}
        {toggle &&
          congressmanList.slice(10).map((congressman) => <CongressmanItem key={congressman.name} {...congressman} />)}
      </div>

      <Button size="sm" className="text-gray-3 bg-gray-1 w-[73px] h-8 mx-auto " onClick={onToggle}>
        {toggle ? '간략히' : '전체보기'}
      </Button>
    </div>
  );
}
