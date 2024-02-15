interface ItemListProps {
  children: React.ReactNode;
  title: string;
}

export default function ItemList({ children, title }: ItemListProps) {
  return (
    <div className="pl-5 pr-3 mt-3">
      <h2 className="text-2xl font-bold ">{title}</h2>
      <div className="flex flex-col my-3 gap-4">{children}</div>
    </div>
  );
}
