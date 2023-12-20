import { Button } from '@nextui-org/button';

interface FollowItemProps {
  title: string;
  followCount: number;
}

export default function FollowItem({ title, followCount }: FollowItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-lg font-bold">{followCount}</div>
      <Button className="h-7 w-[88px] bg-gray-4 border-primary-1 border-1 text-white text-xs">{title}</Button>
    </div>
  );
}
