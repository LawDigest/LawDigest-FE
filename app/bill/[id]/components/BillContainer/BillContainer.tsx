'use client';

import { useEffect, useState } from 'react';
import { Bill } from '@/components/Bill';
import { Divider, Spinner } from '@nextui-org/react';
import { useGetBillDetail } from '../../apis';
import { SectionContainer, ProposerList, ProgressStage } from '..';
import AnotherBillList from '../AnotherBill/AnotherBillList';

const initialData = {
  bill_info_dto: {
    bill_id: '',
    bill_name: '',
    propose_date: '',
    summary: '',
    gpt_summary: '',
    view_count: 0,
    bill_like_count: 0,
    bill_stage: '',
    brief_summary: '',
  },
  representative_proposer_dto_list: [
    {
      representative_proposer_id: '',
      representative_proposer_name: '',
      represent_proposer_img_url: '',
      party_id: 0,
      party_image_url: '',
      party_name: '',
    },
  ],
  public_proposer_dto_list: [
    {
      public_proposer_id: '',
      public_proposer_name: '',
      public_proposer_img_url: '',
      public_proposer_party_id: 0,
      public_proposer_party_image_url: '',
      public_proposer_party_name: '',
    },
  ],
  is_book_mark: false,
  similar_bills: [
    {
      billBriefSummary: '',
      billId: '',
      billName: '',
      billProposers: '',
      billStage: '',
      party: [
        {
          party_id: 0,
          party_image_url: '',
          party_name: '',
        },
      ],
    },
  ],
};

export default function BillContainer({ id, viewCount }: { id: string; viewCount: number }) {
  const { data, isFetching } = useGetBillDetail(id);
  const [bill, setBill] = useState(data ? data.data : initialData);

  useEffect(() => {
    if (data) {
      setBill(data.data);
    }
  }, [data]);

  return (
    <section className="flex flex-col md:mb-10">
      {isFetching && (
        <div className="flex justify-center w-full my-4">
          <Spinner color="default" />
        </div>
      )}
      {Object.keys(bill).length !== 0 && !isFetching && (
        <Bill {...bill} detail viewCount={viewCount}>
          <section className="md:w-[360px] lg:w-[490px] md:float-right">
            <SectionContainer title="발의자 명단">
              <ProposerList
                representativeProposerList={bill.representative_proposer_dto_list}
                publicProposerList={bill.public_proposer_dto_list}
              />
            </SectionContainer>

            <Divider className="hidden md:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

            <SectionContainer title="심사 진행 단계">
              <ProgressStage billStage={bill.bill_info_dto.bill_stage} />
            </SectionContainer>

            <Divider className="hidden md:block h-[1px] w-full border-gray-1 dark:border-dark-l" />

            <SectionContainer title="다른 개정안 보기">
              <AnotherBillList {...bill} />
            </SectionContainer>
          </section>
        </Bill>
      )}
    </section>
  );
}
