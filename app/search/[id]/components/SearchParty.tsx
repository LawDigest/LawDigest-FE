import Link from 'next/link';
import { Avatar } from '@nextui-org/avatar';
import { SearchCongressmanPartyProps } from '@/types';
import { EnterButton } from '@/components';

export default function SearchParty({ party_id, party_name, party_image_url }: SearchCongressmanPartyProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Avatar src={process.env.NEXT_PUBLIC_IMAGE_URL + party_image_url} size="lg" className="border" />
        <p className="text-lg font-semibold">{party_name}</p>
      </div>
      <Link href={`/party/${party_id}`}>
        <EnterButton />
      </Link>
    </div>
  );
}
