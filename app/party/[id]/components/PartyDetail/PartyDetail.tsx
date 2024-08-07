import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import Image from 'next/image';
import { Link as NextUILink } from '@nextui-org/link';
import { Card } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { IconWeb } from '@/public/svgs';
import {
  PARTY_NAME_KO,
  PARTY_POSITION,
  PARTY_LEADER,
  PARTY_FLOOR_LEADER,
  PARTY_SECRETARY_GENERAL,
  PARTY_POLISY_COMMITTEE_CHAIRMAN,
} from '@/constants/party';
import { useGetPartyDetail } from '../../apis';
import FollowButton from './FollowButton';

export default async function PartyDetail({ partyId }: { partyId: number }) {
  const queryClient = useQueryClient();
  const { data: party } = await useGetPartyDetail({ partyId, queryClient });
  const {
    party_id,
    party_name,
    party_img_url,
    proportional_congressman_count,
    district_congressman_count,
    representative_bill_count,
    public_bill_count,
    follow_count,
    website_url,
    followed,
  } = party;
  const whole_representative_count = proportional_congressman_count + district_congressman_count;
  const seatRatio = ((100 * whole_representative_count) / 298).toFixed(2);

  return (
    <section className="flex flex-col items-center mx-5 mt-5 gap-7">
      <Card shadow="none" className="flex flex-col items-center w-full pt-1 gap-5 dark:bg-dark-b lg:dark:bg-dark-pb">
        <div
          className={`shadow-lg rounded-full w-[130px] h-[130px] flex justify-center items-center border dark:bg-white ${party_name}`}>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + party_img_url}
            width={200}
            height={90}
            alt={`${party_name} 로고 이미지`}
            className="w-[100px] h-[45px] object-contain bg-white"
          />
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl font-semibold">{party_name}</h2>
          <h3 className="text-gray-3 dark:text-gray-2">{PARTY_POSITION[party_name as keyof typeof PARTY_NAME_KO]}</h3>
        </div>

        <div className="text-sm">
          <p>
            의석수: {whole_representative_count}석 / 298석{' '}
            <span className="text-gray-2 dark:text-gray-3">{seatRatio}%</span>
          </p>
          <p>
            지역구 {district_congressman_count}석, 비례대표 {proportional_congressman_count}석
          </p>
        </div>

        <FollowButton id={partyId} followed={followed} />
      </Card>

      <Divider className="dark:bg-dark-l" />

      <section className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-[10px]">
          <p className="text-2xl font-semibold">{follow_count}</p>
          <p className="text-sm font-medium text-gray-2 dark:text-gray-3">팔로워</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          {representative_bill_count ? (
            <Link href={`/party/${party_id}/bill`} className="text-2xl font-semibold">
              {representative_bill_count}
            </Link>
          ) : (
            <p className="text-2xl font-semibold"> {representative_bill_count}</p>
          )}
          <p className="text-sm font-medium text-gray-2 dark:text-gray-3">대표발의법안</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          {public_bill_count ? (
            <Link href={public_bill_count ? `/party/${party_id}/bill` : ''} className="text-2xl font-semibold">
              <p className="text-2xl font-semibold">{public_bill_count}</p>
            </Link>
          ) : (
            <p className="text-2xl font-semibold"> {public_bill_count}</p>
          )}
          <p className="text-sm font-medium text-gray-2 dark:text-gray-3">공동발의법안</p>
        </div>
      </section>

      <Divider className="dark:bg-dark-l" />

      <div className="w-full grid grid-cols-4 justify-items-center ">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3 dark:text-gray-2">당대표</p>
          <p className="font-medium">{PARTY_LEADER[party_name as keyof typeof PARTY_NAME_KO] || '없음'}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3 dark:text-gray-2">원내대표</p>
          <p className="font-medium">{PARTY_FLOOR_LEADER[party_name as keyof typeof PARTY_NAME_KO] || '없음'}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3 dark:text-gray-2">사무총장</p>
          <p className="font-medium">{PARTY_SECRETARY_GENERAL[party_name as keyof typeof PARTY_NAME_KO] || '없음'}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3 dark:text-gray-2">정책위의장</p>
          <p className="font-medium">
            {PARTY_POLISY_COMMITTEE_CHAIRMAN[party_name as keyof typeof PARTY_NAME_KO] || '없음'}
          </p>
        </div>
      </div>

      <Button
        as={NextUILink}
        href={website_url}
        endContent={<IconWeb />}
        variant="bordered"
        radius="full"
        className="2-[135px] h-8 bg-transparent text-gray-2 border-gray-1 dark:border-gray-3">
        웹사이트 방문
      </Button>
    </section>
  );
}
