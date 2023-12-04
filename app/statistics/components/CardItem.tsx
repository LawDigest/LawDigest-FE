interface CardItemProps {
  title: string;
  children: React.ReactNode;
}

export default function CardItem({ title, children }: CardItemProps) {
  return (
    <div className="mt-5 border-b-4 border-[#E2E8F0]">
      <h1 className="mx-6 text-xl font-semibold">{title}</h1>
      <div className="mx-6 my-3">{children}</div>
    </div>
  );
}
