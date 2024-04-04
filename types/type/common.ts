import { BillProps } from './bill';
import { Pagination } from './pagination';

export interface FeedResponse {
  bill_list: BillProps;
  pagination_response: Pagination;
}

export type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
