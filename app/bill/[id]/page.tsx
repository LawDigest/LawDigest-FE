import { Bill, GPTSummary } from '@/components/Bill';
import { Button } from '@nextui-org/button';
import getQueryClient from '@/lib/getQueryClient';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';
import { prefetchGetBillDetail, useGetBillDetail, usePatchViewCount } from './apis';
import { SectionContainer, ProposerList } from './components';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  await prefetchGetBillDetail(id, queryClient);

  const { data: bill } = await useGetBillDetail(id, queryClient);
  const viewCount = await usePatchViewCount(id).then((res) => res.data.view_count);
  const representativeProposer = bill.representative_proposer_dto.representative_proposer_name;
  const proposerList = bill.public_proposer_dto_list;
  const similarBills = bill.similar_bills;

  return (
    <section className="flex flex-col">
      <Bill {...bill} detail viewCount={viewCount}>
        <div className="flex flex-col gap-[34px]">
          <Divider className="bg-gray-0.5 dark:bg-dark-l" />

          <GPTSummary />

          <div className="flex flex-col items-center gap-3">
            <h5 className="text-xs font-semibold text-theme-alert">
              AI 기반의 요약은 내용이 불완전할 수 있습니다. 꼭 원문을 확인해주세요 !
            </h5>

            <Link href={bill.bill_info_dto.bill_link}>
              <Button
                size="lg"
                color="primary"
                radius="full"
                className="w-[242px] h-[56px] bg-primary-3 dark:bg-gray-0.5 dark:text-black">
                원문 확인하기
              </Button>
            </Link>
          </div>

          <Divider className="bg-gray-0.5 dark:bg-dark-l" />
        </div>

        <SectionContainer title="발의자 명단">
          <ProposerList representativeProposer={representativeProposer} proposerList={proposerList} />
        </SectionContainer>

        <SectionContainer title="심사 진행 단계">심사 진행 단계</SectionContainer>

        <SectionContainer title="다른 개정안 보기">
          <div className="flex flex-col gap-[10px]">
            {similarBills.map(({ billId, billName }) => (
              <Link
                href={`/bill/${billId}`}
                className="w-[250px] h-10 bg-gray-1 rounded-[10px] text-xs truncate flex items-center p-3"
                key={billId}>
                <p className="truncate">{billName}</p>
              </Link>
            ))}
          </div>
        </SectionContainer>
      </Bill>
    </section>
  );
}
