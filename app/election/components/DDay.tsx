import { getDDay } from '@/utils';

export default function DDay() {
  // eslint-disable-next-line no-nested-ternary
  const dday = getDDay() === 0 ? 'D-day' : Number(getDDay()) > 0 ? `D+${getDDay()}` : `D${getDDay()}`;

  return (
    <div className="flex flex-col items-center w-[150px]">
      <p className="text-[26px] font-bold">{dday}</p>
      <p className="text-xs font-semibold text-gray-2">제22대 국회의원선거</p>
    </div>
  );
}
