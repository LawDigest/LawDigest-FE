import type { Pagination } from '@/app/common/types';
import type { BillProps } from '@/app/bill/[id]/types';

export interface SearchBillResponse {
  search_response: BillProps;
  pagination_response: Pagination;
}
