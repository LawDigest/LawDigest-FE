'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { Spinner } from '@nextui-org/spinner';
import { convertDateFormat } from '@/utils';
import { Divider } from '@nextui-org/react';
import PlenaryList from './PlenaryList';
import PromulgationList from './PromulgationList';
import CommitteeAuditList from './CommitteeAuditList';
import { useGetTimelineFeed } from '../apis/queries';

export default function ListContainer() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetTimelineFeed();
  const [feed, setFeed] = useState(data ? data.pages.flatMap(({ data: responses }) => responses) : []);

  const fetchRef = useIntersect(async (entry: any, observer: any) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (data) {
      setFeed(() => [...data.pages.flatMap(({ data: responses }) => responses)]);
    }
  }, [data]);

  return (
    <section className="px-5 my-6 lg:w-[640px] mx-auto">
      <div className="flex flex-col">
        <div className="absolute w-[2px] h-5 bg-white dark:bg-dark-b dark:lg:bg-dark-pb" />
        {feed.map(({ date, plenary_list, promulgation_list, committee_audit_list }) => (
          <div key={date} className="flex gap-6">
            <Divider orientation="vertical" className="w-[2px] h-auto" />
            <div className="w-full pb-10">
              <div className="relative">
                <div className="w-[25px] h-[25px] bg-gray-1 dark:bg-gray-3 absolute rounded-full border-black border top-5 -left-[38px]" />
                <h2 className="flex items-baseline gap-2">
                  <span className="text-[42px]">
                    {convertDateFormat(date)[0]}.{convertDateFormat(date)[1]}
                  </span>
                  <span className="text-[22px]">{convertDateFormat(date)[2]}</span>
                </h2>
              </div>
              <div className="flex flex-col gap-5">
                {plenary_list.length !== 0 && <PlenaryList plenary_list={plenary_list} />}
                {promulgation_list.length !== 0 && <PromulgationList promulgation_list={promulgation_list} />}
                {committee_audit_list.length !== 0 && (
                  <CommitteeAuditList committee_audit_list={committee_audit_list} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      <div ref={fetchRef} />
    </section>
  );
}
