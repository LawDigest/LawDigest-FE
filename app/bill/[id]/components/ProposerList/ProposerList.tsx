'use client';

import Image from 'next/image';
import { Accordion, AccordionItem, Badge } from '@nextui-org/react';
import { sortByParty } from '@/utils';

export default function ProposerList({
  representativeProposer,
  proposerList,
}: {
  representativeProposer: {
    representative_proposer_id: string;
    representative_proposer_name: string;
    represent_proposer_img_url: string;
    party_id: number;
    party_image_url: string;
    party_name: string;
  };
  proposerList: {
    public_proposer_id: string;
    public_proposer_name: string;
    public_proposer_img_url: string;
    public_proposer_party_id: number;
    public_proposer_party_image_url: string;
    public_proposer_party_name: string;
  }[];
}) {
  const proposerLength = proposerList.length;
  const proposerListByParty = sortByParty({ representativeProposer, proposerList });

  return (
    <Accordion variant="bordered">
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        title={`${representativeProposer.representative_proposer_name} 외 ${proposerLength}인`}>
        <div className="flex flex-col gap-5 my-[18px]">
          {/* eslint-disable-next-line react/no-unused-prop-types */}
          {proposerListByParty.map(({ party, proposers }: { party: string; proposers: string[] }) => (
            <div key={party} className="flex items-center gap-10">
              <Badge content={proposers.length - 1} color="danger">
                <div className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg shrink-0 dark:bg-white">
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_URL + proposers[0]}
                    width={30}
                    height={30}
                    alt={`${party} 로고 이미지`}
                  />
                </div>
              </Badge>
              <div className="grid grid-cols-5 text-sm gap-x-[10px] gap-y-1">
                {proposers
                  .slice(1)
                  .toSorted()
                  .map((proposer) => (
                    <p key={proposer}>{proposer}</p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
