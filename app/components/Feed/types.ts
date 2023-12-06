export interface Bill {
  id: number;
  name: string;
  people: string;
  content: string;
  date: string;
  like: number;
  view: number;
}

export interface PaginationResponse<T> {
  contents: T[];
  isLastPage: boolean;
  pageNumber: number;
}

export type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
