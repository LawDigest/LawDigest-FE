'use client';

import { usePathname } from 'next/navigation';
import { Tabs, Tab } from '@nextui-org/tabs';
import { siteConfig } from '@/config/site';

export default function ElectionTab() {
  const pathname = usePathname();
  const values = siteConfig.electionTabs;

  return (
    <section className="flex flex-col items-center my-5">
      <Tabs
        color="primary"
        size="sm"
        radius="full"
        selectedKey={pathname}
        classNames={{
          cursor: ['bg-primary-3', 'font-medium'],
        }}>
        {values.map(({ label, value }) => (
          <Tab key={`/election/${value}`} title={label} href={`/election/${value}`} />
        ))}
      </Tabs>
    </section>
  );
}
