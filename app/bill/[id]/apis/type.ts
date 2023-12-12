import { BILL_STAGE } from '@/constants';
import { BillProps } from '@/types';

export interface BillDetailResponse extends BillProps {
  readonly url: string;
  readonly step: keyof typeof BILL_STAGE;
  readonly keywords: string[];
  readonly similarBills: { title: string; link: string }[];
}
