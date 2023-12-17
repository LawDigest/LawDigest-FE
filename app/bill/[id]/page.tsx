import { Bill } from '@/components/Bill';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/getQueryClient';
import GPTSummary from '@/components/GPTSummary';
import { Button } from '@nextui-org/button';
import { DetailLinkIcon } from '@/components/common/Icons';
import Link from 'next/link';
import CardFooter from '@/components/CardFooter';
import Proposers from '@/components/Proposers';
import { useBillDetail } from './apis';
import Chart from './components/Chart';
import Stages from './components/Stages';
import Keywords from './components/Keywords';
import Similars from './components/Similars/Similars';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  const { data: bill } = await useBillDetail({ id, queryClient });

  const {
    like,
    view,
    represent_proposer_id,
    proposer_party_count_list,
    stage,
    represent_proposer,
    public_proposer_list,
    public_proposer_id_list,
  } = bill;
  const datas = proposer_party_count_list.map(({ count }) => count);
  const partyNames = proposer_party_count_list.map(({ name }) => name);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col items-center w-full">
        <Bill {...bill} divide={false} />
        <GPTSummary />
        <div className="w-full px-3">
          <Button size="lg" variant="flat" color="primary" className="w-full">
            <Link href="https://law.nanet.go.kr/foreignlaw/newForeignLawissue/list.do?isMenu=Y">
              <div className="display">
                <div className="flex items-center justify-center gap-1 text-base font-semibold">
                  원문 보기
                  <DetailLinkIcon color="#006FEE" />
                </div>
                <div className="text-xs">AI 기반의 요약은 내용이 불완전할 수 있습니다. 꼭 원문을 확인해주세요 !</div>
              </div>
            </Link>
          </Button>
        </div>
        <Chart datas={datas} partyNames={partyNames} />
        <div className="my-5" />
        <Stages stage={stage} />
        <Proposers
          represent_proposer={represent_proposer}
          represent_proposer_id={represent_proposer_id}
          public_proposer_list={public_proposer_list}
          public_proposer_id_list={public_proposer_id_list}
        />
        {/* <Keywords keywords={keywords} />
        <Similars similars={similars} /> */}
        <CardFooter like={like} view={view} />
      </section>
    </HydrationBoundary>
  );
}
