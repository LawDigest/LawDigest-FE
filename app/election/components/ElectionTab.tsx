'use client';

import { usePathname } from 'next/navigation';
import { Tabs, Tab } from '@nextui-org/tabs';

export default function ElectionTab() {
  const pathname = usePathname();

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
        <Tab key="/election/district" title="지역구" href="/election/district">
          <p>지역구</p>
        </Tab>
        <Tab key="/election/propotional" title="비례대표" href="/election/propotional">
          <p>비례대표</p>
        </Tab>
      </Tabs>
    </section>
  );
}
