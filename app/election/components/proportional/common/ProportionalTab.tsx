import { Tabs, Tab } from '@nextui-org/tabs';
import { siteConfig } from '@/config/site';
import { PROPORTIONAL_TAB, PROPORTIONAL_TAB_KO } from '@/constants';
import { Key } from 'react';
import { ValueOf } from '@/types';

export default function ProportionalTab({
  type,
  clickHandler,
}: {
  type: ValueOf<typeof PROPORTIONAL_TAB_KO>;
  clickHandler: (key: Key) => any;
}) {
  const values = siteConfig.proportionalTabs;

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
          <Tab key={label} title={PROPORTIONAL_TAB_KO[value as keyof typeof PROPORTIONAL_TAB]} />
        ))}
      </Tabs>
    </section>
  );
}
