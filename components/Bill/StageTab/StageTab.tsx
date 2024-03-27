'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { STAGE_TAB, STAGE_TAB_KO } from '@/constants';
import { Radio, RadioGroup } from '@nextui-org/react';

export default function StageTab() {
  const categoryValues = siteConfig.stageTabs;
  const [isSelected, setIsSelected] = useState('접수');

  return (
    <section>
      <RadioGroup
        color="secondary"
        defaultValue="접수"
        orientation="horizontal"
        className="mx-5 my-5 "
        value={isSelected}
        onValueChange={setIsSelected}>
        <div className="flex justify-between w-full">
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
