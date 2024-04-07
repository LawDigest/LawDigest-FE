import { Tabs, Tab } from '@nextui-org/tabs';
import { siteConfig } from '@/config/site';
import { SEARCH_TAB, SEARCH_TAB_KO } from '@/constants';
import { Key } from 'react';
import { ValueOf } from '@/types';

export default function SearchTab({
  type,
  clickHandler,
}: {
  type: ValueOf<typeof SEARCH_TAB_KO>;
  clickHandler: (key: Key) => any;
}) {
  const values = siteConfig.searchTabs;

  return (
    <section className="w-full">
      <Tabs
        fullWidth
        aria-label="Options"
        variant="underlined"
        classNames={{
          tabList: 'w-full p-0 border-b border-divider',
          cursor: 'bg-black',
          tab: 'px-0 h-10',
          tabContent: 'mx-2 group-data-[selected=true]:text-black',
        }}
        selectedKey={type}
        onSelectionChange={clickHandler}
        className="w-full">
        {values.map(({ label, value }) => (
          <Tab key={label} title={SEARCH_TAB_KO[value as keyof typeof SEARCH_TAB]} />
        ))}
      </Tabs>
    </section>
  );
}
