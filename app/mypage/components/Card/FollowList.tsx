interface FollowListProps {
  children: React.ReactNode;
}

export default function FollowList({ children }: FollowListProps) {
  return <div className="flex justify-center gap-4">{children}</div>;
}
