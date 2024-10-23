'use client';

import { useState, useEffect } from 'react';
import { useIntersect } from '@/hooks';
import { Spinner } from '@nextui-org/spinner';
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
    <section>
      <div>
        {feed.map((day) => (
          <div key={day.date}>
            <PlenaryList />
            <PromulgationList />
            <CommitteeAuditList />
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
