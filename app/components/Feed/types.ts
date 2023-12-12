import { BillProps } from '@/components/Bill/type';

export interface Pagination {
  readonly last_page: boolean;
  readonly page_number: number;
}
export interface FeedResponse {
  bills: BillProps;
  pagination_reponse: Pagination;
}

export type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
