import Image from 'next/image';

interface MemberItemProps {
  name: string;
  profileImg: string;
  partyImg: string;
}

export default function MemberItem({ name, profileImg, partyImg }: MemberItemProps) {
  return (
    <div>
      <div className="relative flex justify-center">
        <Image src={profileImg} alt="프로필 이미지" width={55} height={55} />
        <Image src={partyImg} alt="정당 로고 이미지" width={26} height={26} className="absolute bottom-0 right-0" />
      </div>
      <div className="font-semibold text-center">{name}</div>
    </div>
  );
}
