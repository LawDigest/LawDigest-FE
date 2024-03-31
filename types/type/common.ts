import { BillProps } from './bill';

export interface Pagination {
  readonly last_page: boolean;
  readonly page_number: number;
}
export interface FeedResponse {
  bill_list: BillProps;
  pagination_response: Pagination;
}

export type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
