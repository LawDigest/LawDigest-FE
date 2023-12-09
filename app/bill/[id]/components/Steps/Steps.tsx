import { BILL_STAGE, BILL_STAGE_KO } from '@/constants';

export default function Steps({ step }: { step: keyof typeof BILL_STAGE }) {
  return (
    <section className="w-[92%]">
      <h1 className="text-2xl font-bold">심사 진행 단계</h1>
      <div className="grid grid-cols-2 gap-x-[13px] gap-y-[10px] my-[20px]">
        {Object.values(BILL_STAGE).map((value, index) => (
          <div
            key={value}
            className={
              `${step === value ? 'bg-[#E6F1FE]' : 'white'}` +
              ' flex w-full h-[30px] border-1 border-[#E6F1FE] rounded-xl items-center'
            }>
            <div
              className={
                `${step === value ? 'bg-dpk' : 'bg-[#E6F1FE]'}` +
                `${step === value ? ' text-white' : ' text-dpk'}` +
                ' flex justify-center items-center w-[20px] h-[20px] border-[2px] border-white rounded-full text-sm font-regular ml-[14%]'
              }>
              {index + 1}
            </div>
            <div className="flex justify-center ml-[13.5px] text-dpk font-bold">{BILL_STAGE_KO[value]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
