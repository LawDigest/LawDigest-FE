import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Link as NextUILink } from '@nextui-org/link';
import { Card } from '@nextui-org/card';
import { Avatar } from '@nextui-org/avatar';
import { Divider } from '@nextui-org/react';
import { getPartyColor } from '@/utils';
import { QueryClient } from '@tanstack/react-query';
import { IconWeb } from '@/public/svgs';
import { useGetPartyDetail } from '../../apis';

export default async function PartyDetail({ id, queryClient }: { id: number; queryClient: QueryClient }) {
  const { data: party } = await useGetPartyDetail({ id, queryClient });
  const {
    party_id,
    party_name,
    party_img_url,
    propotional_representative_count,
    district_representative_count,
    website_url,
    followed,
  } = party;
  const partyColor = getPartyColor(party_name);
  const whole_representative_count = propotional_representative_count + district_representative_count;
  const seatRatio = ((100 * whole_representative_count) / 298).toFixed(2);

  return (
    <section className="flex flex-col items-center mx-5 gap-7">
      <Card shadow="none" className="flex flex-col items-center w-full gap-5 pt-1">
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + party_img_url}
          isBordered
          className={`w-[130px] h-[130px] shadow-lg bg-white border-party-${partyColor}`}
        />

        <h2 className="text-2xl font-semibold">{party_name}</h2>

        <div className="text-sm">
          <p>
            의석수: {whole_representative_count}석 / 298석 <span className="text-gray-2">{seatRatio}%</span>
          </p>
          <p>
            지역구 {district_representative_count}석, 비례대표 {propotional_representative_count}석
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
          <Link href={`/party/bill/${party_id}`} className="text-2xl font-semibold">
            임시
          </Link>
          <p className="text-sm font-medium text-gray-2">대표발의법안</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <Link href={`/party/bill/${party_id}`} className="text-2xl font-semibold">
            <p className="text-2xl font-semibold">임시</p>
          </Link>
          <p className="text-sm font-medium text-gray-2">공동발의법안</p>
        </div>
      </section>

      <Divider />

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
