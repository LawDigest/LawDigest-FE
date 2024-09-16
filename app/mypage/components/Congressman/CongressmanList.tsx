import { QueryClient } from '@tanstack/react-query';
import { FollowingCongressmanType } from '@/types';
import CongressmanItem from './CongressmanItem';
import { useGetFollowingCongressman } from '../../apis';

export default async function CongressmanList({ queryClient }: { queryClient: QueryClient }) {
  const { data: congressmanList } = await useGetFollowingCongressman(queryClient);
  const congressmanLength = congressmanList.length;

  return (
    <section className="px-[30px] flex flex-col gap-6">
      <p className="text-xl font-semibold">
        팔로우한 의원 &middot;<span className="text-[#555555] dark:text-gray-2"> {congressmanLength}</span>
      </p>

      <div className="grid grid-cols-4 gap-y-[18px] xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 xl:w-[900px] lg:w-[760px]">
        {congressmanList.map((congressman: FollowingCongressmanType) => (
          <CongressmanItem key={`${congressman.congressman_id}`} {...congressman} />
        ))}
      </div>
    </section>
  );
}
