import Image from 'next/image';
import { BillProps } from '@/types';
import { Card, CardFooter, CardBody, Chip, AvatarGroup, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { PartyLogoReplacement } from '@/components';

export default function BillBookmarked({
  bill_info_dto: { bill_id, bill_name, bill_stage },
  representative_proposer_dto_list,
  public_proposer_dto_list,
}: BillProps) {
  const isRepresentativeSolo = representative_proposer_dto_list.length === 1;
  const partyName = isRepresentativeSolo ? representative_proposer_dto_list[0].party_name : '다수';

  return (
    <Link href={`/bill/${bill_id}`}>
      <Card className={`border-1.5 ${partyName}`} radius="sm">
        <CardBody className="flex flex-row justify-between gap-2">
          <p className="text-sm font-bold">{bill_name}</p>
          <div className="flex flex-col items-end w-[100px] gap-2 shrink-0">
            <Chip
              className="text-xs bg-transparent text-gray-2 border-gray-1 dark:border-gray-3 dark:text-gray-3 border-1"
              size="sm"
              variant="bordered"
              radius="sm">
              {bill_stage}
            </Chip>
            <h4 className="text-xs font-semibold text-gray-2">
              {isRepresentativeSolo
                ? `${
                    representative_proposer_dto_list[0].representative_proposer_name
                  } 의원 등 ${public_proposer_dto_list.length + 1}인`
                : `${representative_proposer_dto_list
                    .map(({ representative_proposer_name }) => representative_proposer_name)
                    .join('·')} 의원 등 ${representative_proposer_dto_list.length + public_proposer_dto_list.length}인`}
            </h4>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center pt-0">
          {/* eslint-disable-next-line no-nested-ternary */}
          {isRepresentativeSolo ? (
            representative_proposer_dto_list[0].party_image_url !== null ? (
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + representative_proposer_dto_list[0].party_image_url}
                width={40}
                height={20}
                alt={`${representative_proposer_dto_list[0].party_name} 이미지`}
                className="object-contain w-10 h-8"
              />
            ) : (
              <PartyLogoReplacement partyName={representative_proposer_dto_list[0].party_name} circle={false} />
            )
          ) : (
            <AvatarGroup>
              {representative_proposer_dto_list.map(({ party_image_url, party_id, party_name }) => (
                <Avatar
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
                  key={party_id}
                  size="md"
                  classNames={{
                    base: [`bg-white p-1 border ${party_name}`],
                    img: ['object-contain'],
                  }}
                />
              ))}
            </AvatarGroup>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
