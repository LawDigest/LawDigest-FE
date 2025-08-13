import type { FollowingCongressmanType } from '@/app/following/types';
import CongressmanItem from './CongressmanItem';

export default function CongressmanList({ congressmanList }: { congressmanList: FollowingCongressmanType[] }) {
  return (
    <ul className="flex gap-3 w-full lg:flex-col lg:gap-2 xl:gap-4">
      {congressmanList.map((congressman) => (
        <CongressmanItem {...congressman} key={congressman.congressman_id} />
      ))}
    </ul>
  );
}
