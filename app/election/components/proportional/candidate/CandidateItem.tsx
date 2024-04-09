import Link from 'next/link';
import { Avatar } from '@nextui-org/avatar';
import { ProportionalCandidateProps } from '@/types';
import { EnterButton } from '@/components';

export default function CandidateItem({
  name,
  candidate_order,
  career1,
  proportional_candidate_image_url,
  proportional_candidate_id,
}: ProportionalCandidateProps) {
  return (
    <div className="w-full h-[66px] p-0 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + proportional_candidate_image_url}
          className="w-[66px] h-[66px] object-cover border"
        />

        <p className="text-xl font-semibold">{candidate_order} 번</p>

        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-xs font-medium text-gray-2">{career1}</p>
        </div>
      </div>

      <Link href={`/election/candidate/${proportional_candidate_id}?type=proportional`}>
        <EnterButton />
      </Link>
    </div>
  );
}
