export interface TimelineFeedResponse {
  date: string;
  bill_count: number;
  plenary_list: {
    bill_info: {
      party_info: {
        party_id: number;
        party_name: string;
        party_image_url: string;
      }[];
      bill_id: string;
      bill_name: string;
      bill_stage: string;
      bill_proposers: string;
      bill_brief_summary: string;
    };
    approval_vote_count: number;
    total_vote_count: number;
    party_vote_list: {
      party_info: {
        party_id: number;
        party_name: string;
        party_image_url: string;
      };
      party_approval_count: number;
    }[];
  }[];
  promulgation_list: {
    party_info: {
      party_id: number;
      party_name: string;
      party_image_url: string;
    }[];
    bill_id: string;
    bill_name: string;
    bill_stage: string;
    bill_proposers: string;
    bill_brief_summary: string;
  }[];
  committee_audit_list: {
    committee_name: string;
    bill_count: number;
    bill_outline_dto_list: {
      party_info: {
        party_id: number;
        party_name: string;
        party_image_url: string;
      }[];
      bill_id: string;
      bill_name: string;
      bill_stage: string;
      bill_proposers: string;
      bill_brief_summary: string;
    }[];
  }[];
}

export interface TimelineBillState {
  days_since_opening: number;
  receipt_count: number;
  treatment_count: number;
  passed_count: number;
}
