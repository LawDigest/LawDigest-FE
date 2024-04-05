import { QueryClient } from '@tanstack/react-query';
import { FollowingCongressmanType } from '@/types';
import CongressmanItem from './CongressmanItem';
import { useGetFollowingCongressman } from '../../apis';

export default async function CongressmanList({ queryClient }: { queryClient: QueryClient }) {
  const { data: congressmanList } = await useGetFollowingCongressman(queryClient);
  const congressmanLength = congressmanList.length;

  return (
    <section className="px-[30px] flex flex-col gap-6 pb-10">
      <p className="text-xl font-semibold">
        팔로우한 의원 &middot;<span className="text-[#555555]"> {congressmanLength}</span>
      </p>

      <div className="grid grid-cols-5 gap-y-[18px]">
        {congressmanList.map((congressman: FollowingCongressmanType) => (
          <CongressmanItem key={`${congressman.congressman_id}`} {...congressman} />
        ))}
      </div>
    </section>
  );
}
