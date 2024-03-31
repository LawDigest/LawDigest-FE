import Image from 'next/image';
import Link from 'next/link';

interface PartyItemProps {
  label: string;
  src: string;
}

export default function PartyItem({ label, src }: PartyItemProps) {
  // eslint-disable-next-line no-nested-ternary
  const borderColor = label === '더불어민주당' ? 'border-dpk' : label === '국민의힘' ? 'border-ppp' : 'border-jp';

  return (
    <Link href={`/party/${label}`}>
      <div className={`w-[132px] h-[102px] rounded-lg mr-[10px] border-[2px] ${borderColor}`}>
        <Image
          src={src}
          width={132}
          height={102}
          alt={`${label} 로고 이미지`}
          className="object-cover w-[132px] h-[102px] rounded-lg"
        />
      </div>
    </Link>
  );
}
