interface CardItemProps {
  title: string;
  children: React.ReactNode;
}

export default function CardItem({ title, children }: CardItemProps) {
  return (
    <div className="flex flex-col gap-6 my-8">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="relative">{children}</div>
    </div>
  );
}
