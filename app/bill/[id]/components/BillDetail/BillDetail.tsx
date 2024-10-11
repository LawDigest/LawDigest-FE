import { Bill } from '@/components';
import { Divider } from '@nextui-org/react';
import { useQueryClient } from '@tanstack/react-query';
import { SectionContainer } from '../SectionContainer';
import { ProposerList } from '../ProposerList';
import { ProgressStage } from '../ProgressStage';
import { AnotherBillList } from '../AnotherBill';
import { useGetBillDetail } from '../../apis';

export default async function BillDetail({ id, viewCount }: { id: string; viewCount: number }) {
  const queryClient = useQueryClient();
  const { data } = await useGetBillDetail(id, queryClient);

  return (
    <section>
      <Bill {...data} detail viewCount={viewCount}>
        <section className="md:w-[360px] lg:w-[490px] md:float-right flex flex-col gap-[34px] mt-[34px]">
          <SectionContainer title="발의자 명단">
            <ProposerList
              representativeProposerList={data.representative_proposer_dto_list}
              publicProposerList={data.public_proposer_dto_list}
              popover={false}
            />
          </SectionContainer>

          <Divider className="hidden md:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

          <SectionContainer title="심사 진행 단계">
            <ProgressStage billStage={data.bill_info_dto.bill_stage} />
          </SectionContainer>

          <Divider className="hidden md:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

          <SectionContainer title="법안 처리 결과">법안 처리 결과</SectionContainer>
        </section>
      </Bill>

      <div className="md:w-[calc(100%-400px)] lg:w-[calc(100%-530px)] border-r-[1px] md:dark:border-dark-l px-4 pt-[34px]">
        <SectionContainer>
          <AnotherBillList {...data} />
        </SectionContainer>
      </div>
    </section>
  );
}
