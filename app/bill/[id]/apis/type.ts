import { BILL_STAGE_KO } from '@/constants';
import { BillResponse } from '@/types';

export interface BillDetailResponse extends BillResponse {
  readonly stage: keyof typeof BILL_STAGE_KO;
  readonly keywords: string[];
  readonly similarBills: { title: string; link: string }[];
  readonly public_proposer_list: string[];
  readonly public_proposer_id_list: string[];
}
