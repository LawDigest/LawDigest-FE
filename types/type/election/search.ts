import { Pagination } from '../common';

export interface SearcHCandidateProps {
  candidate_id: string;
  district_candidate_id: number;
  proportional_candidate_id: string;
  city_name: string;
  district_name: string;
  gu_name: string;
  name: string;
  party_name: string;
  is_district: boolean;
  candidate_image_url: string;
}

export interface SearchCandidateResponse {
  search_response: SearcHCandidateProps;
  pagination_response: Pagination;
}
