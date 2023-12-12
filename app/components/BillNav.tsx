'use client';

import { Tabs, Tab } from '@nextui-org/Tabs';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function BillNav() {
  return (
    <div className="flex flex-col w-full">
      <Tabs
        aria-label="Options"
        variant="underlined"
        classNames={{
          tabList: 'w-full relative rounded-none p-0 border-b border-divider',
          cursor: 'w-full bg-black',
          tab: 'max-w-fit px-0 h-10',
          tabContent: 'mx-2 group-data-[selected=true]:text-black',
        }}>
        {siteConfig.billNavs.map(({ label, href }) => (
          <Tab
            key={label}
            title={
              <Link href={href}>
                <span>{label}</span>
              </Link>
            }
          />
        ))}
      </Tabs>
    </div>
  );
}
