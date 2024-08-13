import { Avatar } from '@nextui-org/react';
import Link from 'next/link';

export default function CongressmanItem({
  congressman_id,
  congressman_name,
  congressman_image_url,
  party_id,
  party_name,
}: {
  congressman_id: string;
  congressman_name: string;
  congressman_image_url: string;
  party_id: number;
  party_name: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Link href={`/congressman/${congressman_id}`}>
        <Avatar
          src={process.env.NEXT_PUBLIC_IMAGE_URL + congressman_image_url}
          className={`w-14 h-14 border ${party_name}`}
        />
      </Link>

      <p className="text-xs font-semibold">
        {congressman_name} <span className="font-normal">의원</span>
      </p>
    </div>
  );
}
