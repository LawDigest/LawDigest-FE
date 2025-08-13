import { BillProps } from './bill';
import { Pagination } from '../../../common/types/pagination';

export interface FeedResponse {
  bill_list: BillProps;
  pagination_response: Pagination;
}

export type FeedPopularResponse = BillProps[];
