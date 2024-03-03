interface KeywordItemProps {
  keyword: string;
}

export default function KeywordItem({ keyword }: KeywordItemProps) {
  return (
    <div className="flex gap-5">
      <p className="text-gray-2">#</p>
      <p className="text-sm font-medium">{keyword}</p>
    </div>
  );
}
