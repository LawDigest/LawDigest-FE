export interface PaginationResponse<T> {
  readonly contents: T[];
  readonly isLastPage: boolean;
  readonly pageNumber: number;
}

export type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
