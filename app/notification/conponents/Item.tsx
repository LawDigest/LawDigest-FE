import Image from 'next/image';

interface ItemProps {
  logo: string;
  name: string;
  law: string;
  members_number: number;
}

export default function Item({ logo, name, law, members_number }: ItemProps) {
  return (
    <div className="flex justify-between">
      <Image src={logo} width={50} height={50} alt="정당 로고 이미지" />
      <div>
        <p className="text-sm font-medium">{name} 의원님이 새로운 법률안을 발의했어요 !</p>
        <p className="text-[#A1A1AA] text-xs">
          {name} 외 {members_number}인이 &apos;{law}&apos; 을 발의했어요
        </p>
        <p className="text-[#A1A1AA] text-xs">30분 전</p>
      </div>
      <button type="button">
        <Image src="images/arrow_right.svg" width={24} height={24} alt="들어가기 이미지" />
      </button>
    </div>
  );
}
