import { getBillByStage } from '@/app/bill/[id]/apis';
import { QueryClient } from '@tanstack/react-query';
import { Layout } from '@/app/common/components/Layout/Layout';
import { Feed } from '@/app/bill/[id]/components';
import { SearchBarButton } from '@/app/search/[id]/components/SearchBar';
import { NotificationTopThree } from './notification/components';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['/bill/mainfeed'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBillByStage(pageParam, ''),
    initialPageParam: 0,
    getNextPageParam: ({ data }) => {
      const { pagination_response } = data || {};
      const { last_page, page_number } = pagination_response || {};
      return last_page ? undefined : page_number + 1;
    },
    pages: 3,
  });

  return (
    <Layout nav logo notification>
      <section className="lg:w-[880px] mx-auto ">
        <SearchBarButton />
        <NotificationTopThree />
        <Feed />
      </section>
    </Layout>
  );
}
