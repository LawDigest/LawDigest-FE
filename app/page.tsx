import getQueryClient from '@/lib/getQueryClient';
import { getBillByStage } from '@/components/Feed/Feed/apis';
import { Layout } from '@/components/Layout/Layout';
import { SearchBarButton } from '@/components/common';
import { Feed } from '@/components/Feed';
import { NotificationTopThree } from './notification/components';

export default async function Home() {
  const queryClient = getQueryClient();

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
