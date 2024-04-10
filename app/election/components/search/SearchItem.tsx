import { SearcHCandidateProps } from '@/types';
import { Avatar } from '@nextui-org/avatar';
import Link from 'next/link';
import { EnterButton } from '@/components';
import Image from 'next/image';

export default function SearchItem({
  district_candidate_id,
  proportional_candidate_id,
  city_name,
  district_name,
  name,
  party_name,
  is_district,
  candidate_image_url,
}: SearcHCandidateProps) {
  const linkUrl = is_district
    ? `/election/candidate/${district_candidate_id}?type=district`
    : `/election/candidate/${proportional_candidate_id}?type=proportional`;

  return (
    <div className="w-full h-[66px] p-0 flex items-center justify-between">
      <div className="flex items-center gap-6">
        {candidate_image_url === null ? (
          <Image src="/images/basicAvatar.png" width={66} height={66} alt="후보자 더미 데이터" />
        ) : (
          <Avatar
            src={process.env.NEXT_PUBLIC_IMAGE_URL + candidate_image_url}
            className="w-[66px] h-[66px] object-cover border"
          />
        )}

        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-xs font-medium text-gray-2">{`${party_name} · ${city_name} ${district_name}`}</p>
        </div>
      </div>

      <Link href={linkUrl}>
        <EnterButton />
      </Link>
    </div>
  );
}
