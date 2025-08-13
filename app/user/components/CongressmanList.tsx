'use client';

import { useEffect, useState } from 'react';
import { useGetFollowingCongressman } from '@/app/user/apis';
import { FollowingCongressmanType, FollowingCongressmanResponse } from '@/app/user/types';
import { ExpandableList } from '@/app/common/components';
import CongressmanItem from './CongressmanItem';

export default function CongressmanList() {
  const { data } = useGetFollowingCongressman();
  const [congressmanList, setConressmanList] = useState<FollowingCongressmanResponse>();

  useEffect(() => {
    if (data) {
      setConressmanList(data.data);
    }
  }, [data]);

  return (
    <section className="px-[30px] flex flex-col gap-6">
      <p className="text-xl font-semibold">
        팔로우한 의원 &middot;<span className="text-[#555555] dark:text-gray-2"> {congressmanList?.length}</span>
      </p>

      {congressmanList && (
        <ExpandableList
          items={congressmanList.map((congressman: FollowingCongressmanType) => (
            <CongressmanItem key={congressman.congressman_id} {...congressman} />
          ))}
          initialCount={8}
        />
      )}
    </section>
  );
}
