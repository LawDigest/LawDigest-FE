import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Link as NextUILink } from '@nextui-org/link';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Divider } from '@nextui-org/react';
import { getPartyColor } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
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

export default async function PartyDetail({ id, queryClient }: { id: number; queryClient: QueryClient }) {
  const { data: party } = await useGetPartyDetail({ id, queryClient });
  const {
    party_id,
    party_name,
    party_img_url,
    proportional_congressman_count,
    district_congressman_count,
    website_url,
    followed,
  } = party;
  const partyColor = getPartyColor(party_name);
  const whole_representative_count = proportional_congressman_count + district_congressman_count;
  const seatRatio = ((100 * whole_representative_count) / 298).toFixed(2);

  return (
    <section className="flex flex-col items-center mx-5 gap-7">
      <Card shadow="none" className="flex flex-col items-center w-full gap-5 pt-1">
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + party_img_url}
          isBordered
          className={`w-[130px] h-[130px] shadow-lg bg-white border-[${partyColor}]`}
        />

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl font-semibold">{party_name}</h2>
          <h3 className="text-gray-3">{PARTY_POSITION[party_name as keyof typeof PARTY_NAME_KO]}</h3>
        </div>

        <div className="text-sm">
          <p>
            의석수: {whole_representative_count}석 / 298석 <span className="text-gray-2">{seatRatio}%</span>
          </p>
          <p>
            지역구 {district_congressman_count}석, 비례대표 {proportional_congressman_count}석
          </p>
        </div>

        <Button radius="full" className="w-full h-12 text-lg font-medium text-gray-3 bg-gray-1">
          팔로우
        </Button>
      </Card>

      <Divider />

      <section className="grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-[10px]">
          <p className="text-2xl font-semibold">{followed || '임시'}</p>
          <p className="text-sm font-medium text-gray-2">팔로워</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Link href={`/party/${party_id}/bill`} className="text-2xl font-semibold">
            임시
          </Link>
          <p className="text-sm font-medium text-gray-2">대표발의법안</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Link href={`/party/${party_id}/bill`} className="text-2xl font-semibold">
            <p className="text-2xl font-semibold">임시</p>
          </Link>
          <p className="text-sm font-medium text-gray-2">공동발의법안</p>
        </div>
      </section>

      <Divider />

      <div className="grid w-full grid-cols-4 justify-items-center ">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3">당대표</p>
          <p className="font-medium">{PARTY_LEADER[party_name as keyof typeof PARTY_NAME_KO]}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3">원내대표</p>
          <p className="font-medium">{PARTY_FLOOR_LEADER[party_name as keyof typeof PARTY_NAME_KO]}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3">사무총장</p>
          <p className="font-medium">{PARTY_SECRETARY_GENERAL[party_name as keyof typeof PARTY_NAME_KO]}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-3">정책위의장</p>
          <p className="font-medium">{PARTY_POLISY_COMMITTEE_CHAIRMAN[party_name as keyof typeof PARTY_NAME_KO]}</p>
        </div>
      </div>

      <Button
        as={NextUILink}
        href={website_url}
        endContent={<IconWeb />}
        variant="bordered"
        radius="full"
        className="2-[135px] h-8 bg-transparent text-gray-2 border-gray-1">
        웹사이트 방문
      </Button>
    </section>
  );
}
