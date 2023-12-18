import { BILL_STAGE_KO } from '@/constants';
import { ValueOf } from '@/types';

export default function Stages({ stage }: { stage: ValueOf<typeof BILL_STAGE_KO> }) {
  return (
    <section className="w-[92%]">
      <h1 className="text-2xl font-bold">심사 진행 단계</h1>
      <div className="grid grid-cols-2 gap-x-[13px] gap-y-[10px] my-[20px]">
        {Object.values(BILL_STAGE_KO).map((value, index) => (
          <div
            key={value}
            className={
              `${stage === value ? 'bg-[#E6F1FE]' : 'white'}` +
              ' flex w-full h-[30px] border-1 border-[#E6F1FE] rounded-xl items-center'
            }>
            <div
              className={
                `${stage === value ? 'bg-dpk' : 'bg-[#E6F1FE]'}` +
                `${stage === value ? ' text-white' : ' text-dpk'}` +
                ' flex justify-center items-center w-[20px] h-[20px] border-[2px] border-white rounded-full text-sm font-regular ml-[14%]'
              }>
              {index + 1}
            </div>
            <div className="flex justify-center ml-[13.5px] text-dpk font-bold">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
