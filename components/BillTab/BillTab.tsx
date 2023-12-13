import { Tabs, Tab } from '@nextui-org/Tabs';
import { siteConfig } from '@/config/site';
import { BILL_TAB, BILL_TAB_KO, FEED_TAB_KO } from '@/constants';
import { Key } from 'react';

const BILL_KEY = {
  ...BILL_TAB_KO,
  ...FEED_TAB_KO,
} as const;

export default function BillTab({
  type,
  clickHandler,
  category,
}: {
  type: keyof typeof BILL_KEY;
  clickHandler: (key: Key) => any;
  category: string;
}) {
  const values = category === 'feed' ? siteConfig.billNavs : siteConfig.billTabs;

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
        selectedKey={BILL_KEY[type]}
        onSelectionChange={clickHandler}
        className="w-full">
        {values.map(({ label, value }) => (
          <Tab key={label} title={BILL_KEY[value as keyof typeof BILL_TAB]} />
        ))}
      </Tabs>
    </section>
  );
}
