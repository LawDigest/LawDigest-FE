import { Avatar } from '@nextui-org/avatar';

interface CongressmanItemProps {
  avatar_src: string;
  party_label: string;
  name: string;
}

export default function CongressmanItem({ avatar_src, party_label, name }: CongressmanItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar src={avatar_src} />
      <div className="flex flex-col items-center">
        <p className="text-xs font-medium text-gray-2">{party_label}</p>
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
}
