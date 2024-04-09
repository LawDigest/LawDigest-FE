import { Pagination } from '../common';

export interface DistrictListProps {
  city_name: string;
  gu_name: string;
  district_name: string;
}

export type DistrictListResponse = DistrictListProps[];

export interface DistrictIdResponse {
  district_id: number;
}

export interface DistrictCandidateProps {
  district_candidate_id: number;
  name: string;
  candidate_order: number;
  party_name: string;
  city_name: string;
  district_name: string;
  district_candidate_image_url: string;
}

export interface DistrictCandidateResponse {
  district_candidate_list_dto_list: DistrictCandidateProps[];
  pagination_response: Pagination;
}

export type CandidateType = 'proportional_candidate' | 'district_candidate';

export interface CandidateDetailResponse {
  name: string;
  city_name: string;
  district_name: string;
  party_image_url: string;
  career1: string;
  career2: string;
  gender: string;
  age: number;
  edu: string;
  district_candidate_image: string;
  district_candidate_id: string;
}
