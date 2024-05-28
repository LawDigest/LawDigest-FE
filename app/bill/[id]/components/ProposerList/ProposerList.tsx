'use client';

// import Image from 'next/image';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function ProposerList({
  representativeProposer,
  proposerList,
}: {
  representativeProposer: string;
  proposerList: {
    public_proposer_id: string;
    public_proposer_name: string;
    public_proposer_img_url: string;
    public_party_id: number;
    public_party_name: string;
    public_party_image_url: string;
  }[];
}) {
  const proposerLength = proposerList.length;

  return (
    <Accordion variant="bordered">
      <AccordionItem key="anchor" aria-label="Anchor" title={`${representativeProposer} 외 ${proposerLength}인`}>
        {proposerList.map((proposer) => (
          <div key={proposer.public_proposer_id}>
            {/* <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + proposer.public_party_image_url}
              width={40}
              height={40}
              alt={`${proposer.public_party_name} 로고 이미지`}
            /> */}
          </div>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
