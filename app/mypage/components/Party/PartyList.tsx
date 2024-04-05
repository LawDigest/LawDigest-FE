import { QueryClient } from '@tanstack/react-query';
import Slider from 'react-slick';
import { FollowingPartyType } from '@/types';
import PartyItem from './PartyItem';
import { useGetFollowingParty } from '../../apis';

export default async function PartyList({ qeuryClient }: { qeuryClient: QueryClient }) {
  const sliderSettings = {
    infinite: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 2000,
    variableWidth: true,
  };
  const { data: partyList } = await useGetFollowingParty(qeuryClient);
  const partyLength = partyList.length;

  return (
    <section className="pl-[30px] flex flex-col gap-6">
      <p className="text-xl font-semibold">
        팔로우한 정당 &middot;<span className="text-[#555555]"> {partyLength}</span>
      </p>

      <Slider {...sliderSettings}>
        {partyList.map((party: FollowingPartyType) => (
          <PartyItem key={party.party_name} {...party} />
        ))}
      </Slider>
    </section>
  );
}
