import Image from 'next/image';

export default function Seat() {
  return (
    <div>
      <div className="mb-2 ml-4">
        정당별 의석수 <span className="text-[#8F8F8F]">총 300 석</span>
      </div>
      <div className="flex justify-center">
        <Image src="/mock/국회_의석수_현황.svg" alt="국회 의석수 현황 그래프" width={330} height={215} />
      </div>
    </div>
  );
}
