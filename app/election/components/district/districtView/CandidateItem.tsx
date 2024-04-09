import { Avatar } from '@nextui-org/avatar';
import { DistrictCandidateProps } from '@/types';
import { EnterButton } from '@/components';
import Link from 'next/link';

export default function CandidateItem({
  district_candidate_id,
  name,
  party_name,
  city_name,
  district_name,
  district_candidate_image_url,
}: DistrictCandidateProps) {
  return (
    <div className="w-full h-[66px] p-0 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + district_candidate_image_url}
          className="w-[66px] h-[66px] object-cover border"
        />

        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-xs font-medium text-gray-2">{`${party_name} · ${city_name} ${district_name}`}</p>
        </div>
      </div>

      <Link href={`/election/candidate/${district_candidate_id}?type=district`}>
        <EnterButton />
      </Link>
    </div>
  );
}
