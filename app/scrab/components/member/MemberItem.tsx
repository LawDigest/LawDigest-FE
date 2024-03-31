import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';

interface MemberItemProps {
  name: string;
  profileImg: string;
  partyImg: string;
}

export default function MemberItem({ name, profileImg, partyImg }: MemberItemProps) {
  return (
    <div>
      <div className="relative flex justify-center">
        <Avatar src={profileImg} alt="프로필 이미지" className="h-14 w-14" />
        <Image src={partyImg} alt="정당 로고 이미지" width={26} height={26} className="absolute bottom-0 right-0" />
      </div>
      <div className="font-semibold text-center">{name}</div>
    </div>
  );
}
