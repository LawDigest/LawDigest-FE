import Image from 'next/image';
import getTimeRemaining from '@/utils/getTimeRemaining';

interface ItemProps {
  logo: string;
  name: string;
  law: string;
  members_number: number;
  date: string;
}

export default function Item({ logo, name, law, members_number, date }: ItemProps) {
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} width={50} height={50} alt="정당 로고 이미지" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="font-medium">{name} 의원</p>
          <p className="text-gray-2">&#183;</p>
          <p className="text-sm text-gray-2"> {getTimeRemaining(date)}</p>
        </div>
        <p className="text-[#A1A1AA] text-sm">
          {name} 외 {members_number}인이 &apos;{law}&apos; 을 발의했어요
        </p>
      </div>
    </div>
  );
}
