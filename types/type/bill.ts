import { ReactNode } from 'react';

export interface BillResponse {
  bill_info_dto: {
    bill_id: string;
    bill_name: string;
    propose_date: string;
    summary: string;
    gpt_summary: string;
  };
  representative_proposer_dto: {
    representative_proposer_id: string;
    representative_proposer_name: string;
    represent_proposer_img_url: string;
    party_id: number;
    party_image_url: string;
    party_name: string;
  };
  public_proposer_dto_list: {
    public_proposer_id: string;
    public_proposer_name: string;
    public_proposer_img_url: string;
    public_party_id: number;
    public_party_name: string;
    public_party_image_url: string;
  }[];
}

export interface BillProps extends BillResponse {
  divide?: boolean;
  children?: ReactNode;
}
