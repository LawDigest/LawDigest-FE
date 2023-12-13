import Bill from '@/components/Bill';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/getQueryClient';
import GPTSummary from '@/components/GPTSummary';
import { Button } from '@nextui-org/button';
import { DetailLinkIcon } from '@/components/common/Icons';
import Link from 'next/link';
import CardFooter from '@/components/CardFooter';
import { BG } from '@/constants';
import { useBillDetail } from './apis';
import Chart from './components/Chart';
import Steps from './components/Steps';
import Keywords from './components/Keywords';
import Similars from './components/Similars/Similars';

const datas = [10, 10, 10];
const partyNames = ['ppp', 'dpk', 'jp'] as (keyof typeof BG)[];
const keywords = ['하이브리드카', '입법법인', '정부법안'];
// const image = 'https://images';
const similars = [
  { title: '의료법일부개정안의료법일부개정안', path: 'www.naver.com' },
  { title: '의료법일부개정안의료법일부개정안', path: 'www.google.com' },
  { title: '의료법일부개정안의료법일부개정안', path: 'www.leets.land' },
];
const [like, view] = [10, 110];

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  const bill = await useBillDetail({ id: Number(id), queryClient });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="flex flex-col items-center w-full">
        <Bill {...bill} />
        <GPTSummary />
        <Button size="lg" variant="flat" color="primary">
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
        <Chart datas={datas} partyNames={partyNames} />
        <Steps step="review" />
        <Keywords keywords={keywords} />
        <Similars similars={similars} />
        <CardFooter like={like} view={view} />
      </section>
    </HydrationBoundary>
  );
}
