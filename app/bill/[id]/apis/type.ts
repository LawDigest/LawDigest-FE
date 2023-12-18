import { BILL_STAGE_KO } from '@/constants';
import { BillResponse, ValueOf } from '@/types';

export interface BillDetailResponse extends BillResponse {
  readonly stage: ValueOf<typeof BILL_STAGE_KO>;
  readonly keywords: string[];
  readonly similarBills: { title: string; link: string }[];
  readonly public_proposer_list: string[];
  readonly public_proposer_id_list: string[];
  readonly proposer_party_count_list: Array<{ name: string; count: number }>;
  readonly proposer_party_id_list: Array<{ name: string; uuid: string }>;
  readonly like: number;
  readonly view: number;
}
