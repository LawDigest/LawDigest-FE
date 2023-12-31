import { ReactNode } from 'react';

export interface BillResponse {
  bill_id: number;
  bill_name: string;
  represent_proposer: string;
  represent_proposer_id: string;
  represent_proposer_party: string;
  represent_proposer_img_url: string;
  party_id_list: string[];
  proposers: string;
  gpt_summary: string;
  summary: string;
  propose_date: string;
  party_image_urls: string[];
}

export interface BillProps extends BillResponse {
  divide?: boolean;
  children?: ReactNode;
}
