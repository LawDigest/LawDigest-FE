import { Bill } from '@/components/Bill';
import getQueryClient from '@/lib/getQueryClient';
import { SubHeader } from '@/components';
import { Divider } from '@nextui-org/react';
import { prefetchGetBillDetail, useGetBillDetail, usePatchViewCount } from './apis';
import { SectionContainer, ProposerList, ProgressStage, AnotherBill } from './components';

export default async function BillDetail({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();
  await prefetchGetBillDetail(id, queryClient);

  const { data: bill } = await useGetBillDetail(id, queryClient);
  const viewCount = await usePatchViewCount(id).then((res) => res.data.view_count);
  const representativeProposerList = bill.representative_proposer_dto_list;
  const publicProposerList = bill.public_proposer_dto_list;
  const similarBills = bill.similar_bills;
  const billStage = bill.bill_info_dto.bill_stage;

  return (
    <section className="flex flex-col">
      <SubHeader title="의안 자세히 보기" />
      <Bill {...bill} detail viewCount={viewCount}>
        <section className="lg:w-[490px] lg:float-right">
          <SectionContainer title="발의자 명단">
            <ProposerList
              representativeProposerList={representativeProposerList}
              publicProposerList={publicProposerList}
            />
          </SectionContainer>

          <Divider className="hidden lg:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

          <SectionContainer title="심사 진행 단계">
            <ProgressStage billStage={billStage} />
          </SectionContainer>

          <Divider className="hidden lg:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

          <SectionContainer title="다른 개정안 보기">
            <AnotherBill similarBills={similarBills} />
          </SectionContainer>
        </section>
      </Bill>
    </section>
  );
}
