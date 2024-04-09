import { Pagination } from '../common';

export interface ProportionalPartyListProps {
  party_id: number;
  party_image_url: string;
  party_name: string;
}

export interface ProportionalPartyListResponse {
  proportional_party_logo_list_dto_list: ProportionalPartyListProps[];
  pagination_response: Pagination;
}

export interface ProportionalPartyInfoResponse {
  party_id: number;
  party_image_url: string;
  candidate_number: number;
  party_name: string;
  party_order: number;
}

export interface ProportionalPromiseProps {
  party_promise_id: number;
  title: string;
  content: string;
}

export interface ProportionalPromiseResponse {
  party_promise: ProportionalPromiseProps[];
  pagination_response: Pagination;
}

export interface ProportionalCandidateProps {
  name: string;
  candidate_order: number;
  career1: string;
  proportional_candidate_image_url: string;
  proportional_candidate_id: number;
}

export interface ProportionalCandidateResponse {
  proportional_candidate_list_dto_list: ProportionalCandidateProps;
  pagination_response: Pagination;
}
