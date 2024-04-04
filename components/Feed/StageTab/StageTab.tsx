'use client';

import { Key } from 'react';
import { siteConfig } from '@/config/site';
import { STAGE_TAB, STAGE_TAB_KO } from '@/constants';
import { Radio, RadioGroup } from '@nextui-org/react';
import { ValueOf } from '@/types';

export default function StageTab({
  type,
  clickHandler,
}: {
  type: ValueOf<typeof STAGE_TAB_KO>;
  clickHandler: (key: Key) => any;
}) {
  const categoryValues = siteConfig.stageTabs;

  return (
    <section>
      <RadioGroup
        color="secondary"
        defaultValue="전체"
        orientation="horizontal"
        className="mx-5 my-5 "
        value={type}
        onValueChange={clickHandler}>
        <div className="flex justify-between w-full">
          <Radio value="전체" size="sm" className="text-sm font-medium">
            전체
          </Radio>
          {categoryValues.map(({ label, value }) => (
            <Radio key={label} value={label} size="sm" className="text-sm font-medium">
              {STAGE_TAB_KO[value as keyof typeof STAGE_TAB]}
            </Radio>
          ))}
        </div>
      </RadioGroup>

      <hr className="w-full h-0.5 " />
    </section>
  );
}
