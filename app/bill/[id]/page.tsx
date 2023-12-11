// bill/[id].ts

import Bill from '@/components/Bill';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/getQueryClient';
import GPTSummary from '@/components/GPTSummary';
import { Button } from '@nextui-org/button';
import { DetailLinkIcon } from '@/components/common/icons';
import Link from 'next/link';
import CardFooter from '@/components/CardFooter';
import { BG } from '@/constants';
import { useBillDetail } from './apis';
import Chart from './components/Chart';
import Steps from './components/Steps';
import Keywords from './components/Keywords';
import Similars from './components/Similars/Similars';

const bill = {
  id: 0,
  name: '홍길동',
  people: '홍길동 외 10인',
  content:
    '도로교통법 일부개정법률안(이소영 의원 등 11인)은 어린이통학버스와 관련하여 몇 가지 변경을 제안하는 법안입니다. 이 법률안에는 다음과 같은 주요 변경 사항이 포함되어 있습니다\n\n1.어린이통학버스의 이용 범위 확대: 현행법은 어린이통학버스를 정의하고 어린이통학버스를 운영하려는 자에게 어린이통학버스로 사용할 수 있는 자동차의 요건을 갖추어 미리 신고하도록 규정하고 있습니다. 이 법률안은 어린이통학버스의 이용 범위에 현장체험학습 등 비상시적으로 이루어지는 교육활동을 위한 이동을 포함하려고 합니다. 이렇게 하면 어린이통학버스가 교육활동을 위한 이동에도 사용될 수 있게 됩니다.\n\n2.어린이통학버스의 이용 범위 확대: 현행법은 어린이통학버스를 정의하고 어린이통학버스를 운영하려는 자에게 어린이통학버스로 사용할 수 있는 자동차의 요건을 갖추어 미리 신고하도록 규정하고 있습니다. 이 법률안은 어린이통학버스의 이용 범위에 현장체험학습 등 비상시적으로 이루어지는 교육활동을 위한 이동을 포함하려고 합니다. 이렇게 하면 어린이통학버스가 이러쿵 저러쿵 이러쿵 저러쿵 이러쿵 저러쿵고 있습니다.\n\n이 법률안은 어린이통학버스의 이용 범위에 현장체험학습 등 비상시적으로 이루어지는 교육활동을 위한 이동을 포함하려고 합니다. 이렇게 하면 어린이통학버',
  date: '1일 전',
};
const datas = [10, 10, 10];
const partyNames = ['ppp', 'dpk', 'jp'] as (keyof typeof BG)[];
const keywords = ['하이브리드카', '입법법인', '정부법안'];
const image = 'https://images';
const similars = [
  { title: '의료법일부개정안의료법일부개정안', path: 'www.naver.com' },
  { title: '의료법일부개정안의료법일부개정안', path: 'www.google.com' },
  { title: '의료법일부개정안의료법일부개정안', path: 'www.leets.land' },
];
const [like, view] = [10, 110];

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  // const queryClient = getQueryClient();
  // const bill = await useBillDetail({ id: Number(id), queryClient });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <section className="flex flex-col items-center w-full">
      <Bill {...bill} divide={false} />
      <GPTSummary />
      <Button size="lg" variant="flat" color="primary">
        {/* TODO: 원문 링크 연결 =>bill.link */}
        <Link href={`/bill/${id}`}>
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
      <Keywords keywords={keywords} image={image} />
      <Similars similars={similars} />
      <CardFooter like={like} view={view} />
    </section>
    // </HydrationBoundary>
  );
}
