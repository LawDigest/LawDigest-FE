import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteConfig } from '@/config/site';
import { FEED_TAB } from '@/constants';
import { Key } from 'react';
import { ValueOf } from '@/types';

export default function FeedTab({
  type,
  clickHandler,
}: {
  type: ValueOf<typeof FEED_TAB>;
  clickHandler: (key: Key) => any;
}) {
  const values = siteConfig.feedTabs;

  return (
    <section className="">
      <Tabs value={type} onValueChange={clickHandler} className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-auto p-0 bg-transparent">
          {values.map(({ label, value }) => (
            <TabsTrigger
              key={FEED_TAB[value as keyof typeof FEED_TAB]}
              value={FEED_TAB[value as keyof typeof FEED_TAB]}
              className="w-full h-[36px] text-base font-medium data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black rounded-full">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
}
