import { Pagination } from '../common';

export interface PropotionalPartyListProps {
  party_id: number;
  party_image_url: string;
  party_name: string;
}

export interface PropotionalPartyListResponse {
  proportional_party_logo_list_dto_list: PropotionalPartyListProps[];
  pagination_response: Pagination;
}

export interface PropotionalPartyInfoResponse {
  party_id: number;
  party_image_url: string;
  candidate_number: number;
  party_name: string;
  party_order: number;
}
