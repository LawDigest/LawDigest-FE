import getQueryClient from '@/lib/getQueryClient';
import { Feed, Layout, SearchBarButton } from '@/components';
import { getBill } from '@/components/Feed/Feed/apis';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['/bill/mainfeed'],
    queryFn: ({ pageParam }: { pageParam: number }) => getBill(pageParam),
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
        <Feed />
      </section>
    </Layout>
  );
}
