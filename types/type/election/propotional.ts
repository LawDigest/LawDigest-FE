import { Pagination } from '../common';

export interface PartyPropotionalProps {
  party_id: number;
  party_image_url: string;
  party_name: string;
}

export interface PartyPropotionalResponse {
  proportional_party_logo_list_dto_list: PartyPropotionalProps[];
  pagination_response: Pagination;
}
