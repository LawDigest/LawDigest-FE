import Image from 'next/image';

interface PartyProps {
  name: string;
  src: string;
  members: number;
}

export default function Party({ name, src, members }: PartyProps) {
  return (
    <div className="overflow-hidden border rounded-2xl min-w-[140px] ">
      <Image src={src} alt={name} width={140} height={140} />
      <div className="flex flex-col items-center justify-center h-[67px] ">
        <div className="font-bold ">{name}</div>
        <div className="text-[#71717A]">의원수 {members}명</div>
      </div>
    </div>
  );
}
