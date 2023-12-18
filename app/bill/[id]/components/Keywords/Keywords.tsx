export default function Keywords({ keywords }: { keywords: string[] }) {
  return (
    <section className="w-[92%] mt-5">
      <h1 className="text-2xl font-bold">주요 키워드 보기</h1>
      <div className="flex justify-between">
        <div className="my-[20px] flex gap-2">
          {keywords.map((keyword) => (
            <span key={keyword} className="text-xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#A1A1AA]">
              #{keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
