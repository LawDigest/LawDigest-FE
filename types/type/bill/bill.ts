import { ReactNode } from 'react';

export interface BillResponse {
  bill_info_dto: {
    bill_id: string;
    bill_name: string;
    propose_date: string;
    summary: string;
    gpt_summary: string;
    view_count: number;
    bill_like_count: number;
    bill_stage: string;
    brief_summary: string;
  };
  representative_proposer_dto_list: {
    representative_proposer_id: string;
    representative_proposer_name: string;
    represent_proposer_img_url: string;
    party_id: number;
    party_image_url: string;
    party_name: string;
  }[];
  public_proposer_dto_list: {
    public_proposer_id: string;
    public_proposer_name: string;
    public_proposer_img_url: string;
    public_proposer_party_id: number;
    public_proposer_party_image_url: string;
    public_proposer_party_name: string;
  }[];
  is_book_mark: boolean;
  similar_bills: {
    billId: string;
    billName: string;
  }[];
}

export interface BillProps extends BillResponse {
  children?: ReactNode;
  detail?: boolean;
  viewCount?: number;
}
