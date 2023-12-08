import Image from 'next/image';

export default function GPTSummary() {
  return (
    <section className="w-full h-[30px] relative my-[30px]">
      <div className="flex w-full h-[30px] justify-center items-center gap-[11px]">
        <div className="w-[25px] h-[1px] bg-black" />
        <div className="text-base font-normal text-black">Summarized by</div>
        <Image src="/images/gpt.png" alt="gpt-logo" width={25} height={25} />
        <div className="text-base font-normal text-black">ChatGPT 4.0</div>
        <div className="w-[25px] h-[1px] bg-black" />
      </div>
    </section>
  );
}
