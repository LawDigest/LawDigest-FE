import Image from 'next/image';
import { Chip } from '@nextui-org/chip';
import { useQueryClient } from '@tanstack/react-query';
import { PartyLogo } from '@/components';
import { useGetProportionalPartyInfo } from '../../../apis';

export default async function ProportionalPartyDetail({ partyId }: { partyId: number }) {
  const queryClient = useQueryClient();
  const { data: party } = await useGetProportionalPartyInfo({ queryClient, partyId });
  const { party_image_url, candidate_number, party_name, party_order } = party;

  return (
    <section>
      <div className="flex items-center justify-between mx-5 my-8">
        {party_image_url ? (
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url}
            width={150}
            height={60}
            alt={`${party_name} 로고 이미지`}
            className="w-[150px] h-[60px] object-cover"
          />
        ) : (
          <PartyLogo partyName={party_name} circle={false} />
        )}

        <div className="flex flex-col items-end gap-3">
          <Chip className="text-white bg-primary-3">기호 {party_order}번</Chip>
          <div className="flex flex-col items-end gap-1">
            <h2 className="text-xl font-semibold">{party_name}</h2>
            <p className="text-xs text-gray-2">후보자 {candidate_number}명</p>
          </div>
        </div>
      </div>

      <hr className="h-[10px] bg-gray-0.5" />
    </section>
  );
}
