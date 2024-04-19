import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';
import { Feed, SearchBar, Layout } from '@/components';
import { getBill } from '@/api/mainfeed';

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
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Layout nav logo notification>
        <SearchBar isElection={false} />
        <Feed />
      </Layout>
    </HydrationBoundary>
  );
}
