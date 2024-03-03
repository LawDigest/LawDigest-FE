interface LawItemProps {
  index: number;
  law: string;
}

export default function LawItem({ index, law }: LawItemProps) {
  return (
    <div className="flex">
      <p className="w-8 text-gray-2">{index}</p>
      <p className="font-medium">{law}</p>
    </div>
  );
}
