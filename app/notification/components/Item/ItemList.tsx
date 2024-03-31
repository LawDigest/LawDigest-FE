interface ItemListProps {
  children: React.ReactNode;
  title: string;
}

export default function ItemList({ children, title }: ItemListProps) {
  return (
    <div className="flex flex-col gap-[18px]">
      <h2 className="text-xl font-bold ">{title}</h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
