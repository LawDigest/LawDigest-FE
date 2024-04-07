import { Pagination } from '../common';

export interface SearchBillProps {
  id: number;
  name: string;
  search_type: string;
  proposed_date: string;
  summary: string;
  like_count: number;
  view_count: number;
  party_id: number;
  proposers: string;
  party_name: string;
  party_image_url: string;
  congressman_image_url: string;
  representative_proposer: string;
  viewCount?: number;
  detail?: boolean;
  congressman?: boolean;
}

export interface SearchBillResponse {
  search_response: SearchBillProps;
  pagination_response: Pagination;
}
