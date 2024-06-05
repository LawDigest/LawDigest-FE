import { useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { CITY_NAME, GU_NAME, DISTRICT_NAME } from '@/constants';
import { Button, Link as NextUILink } from '@nextui-org/react';
import { useGetDistrictId } from '../../../apis';
import CandidateContainer from './CandidateContainer';

export default async function DistrictInfo() {
  const queryClient = useQueryClient();
  const cityName = getCookie(CITY_NAME);
  const guName = getCookie(GU_NAME);
  const districtName = getCookie(DISTRICT_NAME);
  const {
    data: { district_id: districtId },
  } = await useGetDistrictId({ queryClient, cityName, guName, districtName });

  return (
    <section className="flex flex-col mx-5 mb-5 gap-8">
      <div className="flex items-baseline justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">
            <span>{cityName} </span>
            <span>{districtName}</span>
          </h2>
          <h3 className="text-xs text-gray-3">최근 설정한 지역구의 정보를 보여드립니다.</h3>
        </div>

        <Button
          as={NextUILink}
          href="/election/district?set=city"
          size="sm"
          className="text-white h-7 bg-primary-3 rounded-xl">
          지역변경
        </Button>
      </div>

      <CandidateContainer districtId={districtId} />
    </section>
  );
}
